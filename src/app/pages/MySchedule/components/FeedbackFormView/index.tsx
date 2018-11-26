import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../controllers/faculty_loading";
import FacultyClassSchedule from "../../../../models/entities/faculty_class_schedule";
import FeedbackStatus from "../../../../models/enums/feedback_status";
import TermStatus from "../../../../models/enums/term_status";
import { FacultyLoadingState } from "../../../../store/faculty_loading";
import ClassScheduleFeedbackItem from "./components/ClassScheduleFeedbackItem";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class FeedbackFormView extends React.Component<IPropsType> {
    public onClose = () => {
        FacultyLoadingController.toggleFeedbackForm(false);
    };

    public onChange = (cs: FacultyClassSchedule) => (event: any) => {
        const feedback: FeedbackStatus = event.target.value;
        const { facultyLoading } = this.props;
        const { facultyTabState } = facultyLoading!;

        const {
            feedbackFormState: {
                form: { classScheduleFeedbacks },
            },
        } = facultyTabState;

        classScheduleFeedbacks.set(cs, feedback);
    };

    public onSubmitClick = () => {
        FacultyLoadingController.submitFeedback();
    };

    public render() {
        const { facultyLoading } = this.props;
        const { facultyTabState, activeTerm } = facultyLoading!;
        const {
            feedbackFormState,
            feedbackFormState: {
                form: { classScheduleFeedbacks },
            },
        } = facultyTabState;

        const { isShowing } = facultyTabState.feedbackFormState;

        const noAssignments = Array.from(classScheduleFeedbacks).length === 0;

        const allAccepted = Array.from(classScheduleFeedbacks.values()).every(
            feedbackStatus => feedbackStatus === FeedbackStatus.Accepted
        );

        return (
            <DrawerForm
                open={isShowing}
                onClose={this.onClose}
                formTitle="Your Schedule"
            >
                <Grid
                    container
                    spacing={24}
                    alignItems="stretch"
                    direction="column"
                    wrap="nowrap"
                >
                    <Grid item>
                        {noAssignments && (
                            <Typography>No assignments.</Typography>
                        )}
                        {!noAssignments && (
                            <List>
                                {Array.from(
                                    classScheduleFeedbacks.entries()
                                ).map(([cs, feedback]) => (
                                    <ListItem key={cs.id}>
                                        <ClassScheduleFeedbackItem
                                            classSchedule={cs}
                                            feedback={feedback}
                                            onChange={this.onChange(cs)}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Grid>
                    {!allAccepted &&
                        activeTerm!.status !== TermStatus.Published && (
                            <Grid item>
                                <Typography
                                    variant="subtitle2"
                                    color="secondary"
                                >
                                    Because you have at least one rejected class
                                    schedule, the time constraint form will
                                    appear after submission.
                                </Typography>
                            </Grid>
                        )}
                    <Grid item>
                        <FormSubmitBar
                            disabled={noAssignments}
                            formState={feedbackFormState}
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
