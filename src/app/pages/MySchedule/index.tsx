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

    public render() {
        const { facultyLoading, classes } = this.props;
        const { facultyTabState, activeTerm } = facultyLoading!;
        const { activeFaculty } = facultyTabState;
        return (
            <StateWrapper fetchableState={facultyTabState.fetchStatus}>
                {() => (
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.content}
                        wrap="nowrap"
                        spacing={16}
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            justify="space-between"
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
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={
                                        activeTerm!.status ===
                                        TermStatus.Initializing
                                            ? this.submitTimeConstrainsFormToggle(
                                                  true
                                              )
                                            : this.submitFeedbackFormToggle(
                                                  true
                                              )
                                    }
                                >
                                    {activeTerm!.status ===
                                    TermStatus.Initializing
                                        ? "Submit time availability"
                                        : "Submit feedback"}
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item container>
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
                                <TermList />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(MySchedule);
