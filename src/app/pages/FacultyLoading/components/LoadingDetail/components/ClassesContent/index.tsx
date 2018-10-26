import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../store/faculty_loading";
import AddClassFormView from "./components/AddClassFormView";
import AutoAssignWizard from "./components/AutoAssignWizard";
import ClassesAppBar from "./components/ClassesAppBar";
import ClassScheduleDetailsDrawer from "./components/ClassScheduleDetailsDrawer";
import ScheduleCalendar from "./components/ScheduleCalendar";
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

    public toggleAddClassForm = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleAddClassForm(shouldShow);
    };

    public render() {
        const { facultyLoading, classes } = this.props;
        const { classesTabState } = facultyLoading!;
        return (
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
                        <Button
                            variant="extendedFab"
                            color="primary"
                            className={classes.addButton}
                            onClick={this.toggleAddClassForm(true)}
                        >
                            <AddIcon />
                            Add a class
                        </Button>
                        <AddClassFormView />
                        <ClassScheduleDetailsDrawer />
                        <AutoAssignWizard />
                    </Grid>
                )}
            </StateWrapper>
        );
    }
}

export default withStyles(styles)(ClassesContent);
