import AppBar from "@material-ui/core/AppBar";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import MeetingDays, {
    MeetingDaysReadable,
} from "../../../../../../../../models/enums/meeting_days";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class ClassesAppBar extends React.Component<IPropsType> {
    public setTab = (event: React.ChangeEvent, tab: MeetingDays) =>
        FacultyLoadingController.setActiveClassesTab(tab);

    public toggleShowUnassigned = (
        event: React.ChangeEvent,
        shouldShow: boolean
    ) => FacultyLoadingController.showOnlyUnassigned(shouldShow);

    public render() {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const { activeTab, showOnlyUnassigned } = classesTabState;
        return (
            <AppBar color="default" position="relative">
                <Grid container direction="row" alignItems="stretch">
                    <Grid item xs={10}>
                        <Tabs
                            value={activeTab}
                            onChange={this.setTab}
                            textColor="secondary"
                        >
                            {Array.from(MeetingDaysReadable.entries()).map(
                                ([md, mdStr]) => (
                                    <Tab key={md} value={md} label={mdStr} />
                                )
                            )}
                        </Tabs>
                    </Grid>
                    <Grid item xs={2}>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                        >
                            <Grid item>
                                <Checkbox
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
            </AppBar>
        );
    }
}
