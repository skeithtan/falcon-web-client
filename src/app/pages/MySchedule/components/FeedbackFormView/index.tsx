import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DrawerForm from "../../../../components/reusable/DrawerForm";
import FormSubmitBar from "../../../../components/reusable/FormSubmitBar";
import FacultyLoadingController from "../../../../controllers/faculty_loading";
import FacultyClassSchedule from "../../../../models/entities/faculty_class_schedule";
import FeedbackStatus from "../../../../models/enums/feedback_status";
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
        const { facultyTabState } = facultyLoading!;
        const {
            feedbackFormState,
            activeFaculty,
            feedbackFormState: {
                form: { classScheduleFeedbacks },
            },
        } = facultyTabState;

        const {
            isShowing,
            form,
            canSubmit,
        } = facultyTabState.feedbackFormState;

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
                        <List>
                            {Array.from(classScheduleFeedbacks.entries()).map(
                                ([cs, feedback]) => (
                                    <ListItem key={cs.id}>
                                        <ClassScheduleFeedbackItem
                                            classSchedule={cs}
                                            feedback={feedback}
                                            onChange={this.onChange(cs)}
                                        />
                                    </ListItem>
                                )
                            )}
                        </List>
                    </Grid>
                    <Grid item>
                        <FormSubmitBar
                            formState={feedbackFormState}
                            onSubmitClick={this.onSubmitClick}
                        />
                    </Grid>
                </Grid>
            </DrawerForm>
        );
    }
}
