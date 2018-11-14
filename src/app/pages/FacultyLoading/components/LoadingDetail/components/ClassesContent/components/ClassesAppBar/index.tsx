import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import MeetingDays, {
    MeetingDaysReadable,
} from "../../../../../../../../models/enums/meeting_days";
import TermStatus from "../../../../../../../../models/enums/term_status";
import UserType from "../../../../../../../../models/enums/user_type";
import { AuthenticationState } from "../../../../../../../../store/authentication";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import styles from "./styles";

interface IPropsType {
    authentication?: AuthenticationState;
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading", "authentication")
@observer
class ClassesAppBar extends React.Component<IPropsType> {
    public setTab = (event: React.ChangeEvent, tab: MeetingDays) =>
        FacultyLoadingController.setActiveClassesTab(tab);

    public togglePrintTermSchedule = (shouldShow: boolean) => () => {
        FacultyLoadingController.togglePrintTermSchedule(shouldShow);
    };

    public toggleAutoAssignWizardDialog = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleAutoAssignWizardDialog(shouldShow);
    };

    public toggleShowUnassigned = (
        event: React.ChangeEvent,
        shouldShow: boolean
    ) => FacultyLoadingController.showOnlyUnassigned(shouldShow);

    public render() {
        const { facultyLoading, authentication, classes } = this.props;
        const { classesTabState, activeTerm } = facultyLoading!;
        const { currentUser } = authentication!;
        const { activeMeetingDays, showOnlyUnassigned } = classesTabState;
        // const canPrint =
        //     activeTerm!.status === TermStatus.Published ||
        //     activeTerm!.status === TermStatus.Archived;
        return (
            <AppBar color="default" position="relative">
                <Toolbar variant="dense">
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        wrap="nowrap"
                    >
                        <Grid item xs>
                            <Tabs
                                value={activeMeetingDays}
                                onChange={this.setTab}
                                textColor="secondary"
                            >
                                {Array.from(MeetingDaysReadable.entries()).map(
                                    ([md, mdStr]) => (
                                        <Tab
                                            key={md}
                                            value={md}
                                            label={mdStr}
                                        />
                                    )
                                )}
                            </Tabs>
                        </Grid>
                        <Grid
                            item
                            container
                            xs
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            wrap="nowrap"
                        >
                            <Grid item>
                                <Button
                                    color="primary"
                                    onClick={this.togglePrintTermSchedule(true)}
                                >
                                    Print Term Schedule
                                </Button>
                            </Grid>
                            {activeTerm!.status === TermStatus.Scheduling &&
                                currentUser!.authorization ===
                                    UserType.AssociateDean && (
                                    <Grid item>
                                        <Button
                                            color="secondary"
                                            onClick={this.toggleAutoAssignWizardDialog(
                                                true
                                            )}
                                        >
                                            <TouchAppIcon />
                                            Auto-assign
                                        </Button>
                                    </Grid>
                                )}
                            <Grid
                                item
                                container
                                direction="row"
                                alignItems="center"
                                className={classes.unassignedToggle}
                            >
                                <Grid item>
                                    <Switch
                                        checked={showOnlyUnassigned}
                                        onChange={this.toggleShowUnassigned}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption">
                                        Show only unassigned classes
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(ClassesAppBar);
