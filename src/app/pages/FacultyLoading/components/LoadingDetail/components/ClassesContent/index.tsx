import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import TermStatus from "../../../../../../models/enums/term_status";
import { FacultyLoadingState } from "../../../../../../store/faculty_loading";
import PrintTermSchedule from "../ClassesContent/components/PrintTermSchedule";
import AddClassesDrawer from "./components/AddClassesDrawer";
import AutoAssignWizard from "./components/AutoAssignWizard";
import ClassesAppBar from "./components/ClassesAppBar";
import ClassScheduleDetailsDrawer from "./components/ClassScheduleDetailsDrawer";
import ScheduleCalendar from "./components/ScheduleCalendar";
import UnassignedClassesDialog from "./components/UnassignedClassesDialog";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class ClassesContent extends React.Component<IPropsType> {
    public componentDidMount() {
        FacultyLoadingController.getAllClassSchedulesTabPrerequisites();
    }

    public toggleAddClassesDrawer = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleAddClassesDrawer(shouldShow);
    };

    public render() {
        const { facultyLoading, classes } = this.props;
        const { classesTabState, activeTerm } = facultyLoading!;
        return (
            <React.Fragment>
                <StateWrapper fetchableState={classesTabState.fetchStatus}>
                    {() => (
                        <Grid
                            container
                            direction="column"
                            className={classes.root}
                            wrap="nowrap"
                        >
                            <Grid item>
                                <ClassesAppBar />
                            </Grid>
                            <Grid item xs>
                                <ScheduleCalendar />
                            </Grid>
                            {activeTerm!.status === TermStatus.Initializing && (
                                <Button
                                    variant="extendedFab"
                                    color="primary"
                                    className={classes.addButton}
                                    onClick={this.toggleAddClassesDrawer(true)}
                                >
                                    <AddIcon />
                                    Add a class
                                </Button>
                            )}
                            <AddClassesDrawer />
                            <ClassScheduleDetailsDrawer />
                            <AutoAssignWizard />
                            <UnassignedClassesDialog />
                        </Grid>
                    )}
                </StateWrapper>
                <PrintTermSchedule />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ClassesContent);
