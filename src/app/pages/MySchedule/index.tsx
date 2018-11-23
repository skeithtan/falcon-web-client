import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../controllers/faculty_loading";
import IStyleClasses from "../../interfaces/style_classes";
import TermStatus from "../../models/enums/term_status";
import { FacultyLoadingState } from "../../store/faculty_loading";
import FacultyOverview from "../FacultyLoading/components/LoadingDetail/components/FacultyContent/components/FacultyOverview";
import FacultySchedule from "../FacultyLoading/components/LoadingDetail/components/FacultyContent/components/FacultySchedule";
import TermList from "../FacultyLoading/components/TermList";
import FeedbackFormView from "./components/FeedbackFormView";
import NoticeFormView from "./components/NoticeFormView";
import TimeConstraintsFormView from "./components/TimeConstraintsFormView";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class MySchedule extends React.Component<IPropsType> {
    public componentDidMount() {
        document.title = "My Schedule - Falcon";
        FacultyLoadingController.getAllTerms().then(() => {
            FacultyLoadingController.getCurrentFaculty();
        });
    }

    public submitTimeConstrainsFormToggle = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleTimeConstraintsForm(shouldShow);
    };

    public submitFeedbackFormToggle = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleFeedbackForm(shouldShow);
    };

    public toggleTermList = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleTermList(shouldShow);
    };

    public toggleNoticeForm = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleNoticeForm(shouldShow);
    };

    public render() {
        const { facultyLoading, classes } = this.props;
        const { facultyTabState, activeTerm } = facultyLoading!;
        const { activeFaculty } = facultyTabState;

        const termIsNotArchived =
            Boolean(activeTerm) && activeTerm!.status !== TermStatus.Archived;

        const canSubmitTimeConstraints =
            Boolean(activeTerm) &&
            (activeTerm!.status === TermStatus.Initializing ||
                activeTerm!.status === TermStatus.FeedbackGathering);

        return (
            <StateWrapper
                className={classes.outerStateWrapper}
                fetchableState={facultyTabState.fetchStatus}
                disableFlex
            >
                {() => (
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        wrap="nowrap"
                        spacing={16}
                        className={classes.content}
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            justify="space-between"
                            wrap="nowrap"
                        >
                            <Grid item>
                                <Button
                                    size="large"
                                    color="primary"
                                    onClick={this.toggleTermList(true)}
                                >
                                    {`${activeTerm!.ordinalTermReadable} ${
                                        activeTerm!.yearRangeReadable
                                    }`}
                                    <ArrowDropDownIcon />
                                </Button>
                            </Grid>
                            {termIsNotArchived && (
                                <Grid item>
                                    {canSubmitTimeConstraints && (
                                        <Button
                                            variant={
                                                activeTerm!.status ===
                                                TermStatus.Initializing
                                                    ? "contained"
                                                    : "outlined"
                                            }
                                            color="primary"
                                            onClick={this.submitTimeConstrainsFormToggle(
                                                true
                                            )}
                                        >
                                            Submit Time Constraints
                                        </Button>
                                    )}
                                    {activeTerm!.status ===
                                        TermStatus.FeedbackGathering && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.submitFeedbackFormToggle(
                                                true
                                            )}
                                        >
                                            Submit Feedback
                                        </Button>
                                    )}
                                    {activeTerm!.status ===
                                        TermStatus.Published && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.toggleNoticeForm(
                                                true
                                            )}
                                        >
                                            Submit Notice
                                        </Button>
                                    )}
                                </Grid>
                            )}
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            spacing={16}
                            wrap="nowrap"
                        >
                            <Grid item>
                                <FacultyOverview
                                    facultyMember={activeFaculty!}
                                />
                            </Grid>
                            <Grid item>
                                <FacultySchedule
                                    facultyMember={activeFaculty!}
                                />
                            </Grid>
                            <TimeConstraintsFormView />
                            <FeedbackFormView />
                            <NoticeFormView />
                        </Grid>
                        <TermList />
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(MySchedule);
