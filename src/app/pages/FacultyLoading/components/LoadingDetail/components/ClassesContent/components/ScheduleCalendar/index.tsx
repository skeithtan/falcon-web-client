import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as classNames from "classnames";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import MeetingHours, { MeetingHoursReadable } from "../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import ScheduleColumn from "../ScheduleColumn";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
class ScheduleCalendar extends React.Component<IPropsType> {
    public render() {
        const { classes, facultyLoading } = this.props;
        const classSchedules = facultyLoading!.classesTabState
            .activeMeetingDaysClassSchedules;

        return (
            <Grid container alignItems="stretch" className={classes.root}>
                <Grid item className={classes.padded} container direction="row">
                    {Array.from(Object.keys(MeetingHours)).map(
                        (mhr: MeetingHours) => (
                            <Grid
                                item
                                container
                                xs
                                justify="center"
                                key={mhr}
                                className={classes.meetingHourHeader}
                            >
                                <Typography
                                    variant="overline"
                                    color="textSecondary"
                                >
                                    {MeetingHoursReadable.get(mhr)}
                                </Typography>
                            </Grid>
                        )
                    )}
                </Grid>
                <Grid item className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid
                    item
                    className={classNames(
                        classes.scheduleColumsGridItemContainer,
                        classes.padded
                    )}
                    container
                >
                    {Array.from(Object.keys(MeetingHours)).map(
                        (mhr: MeetingHours) => (
                            <Grid item xs key={mhr}>
                                <ScheduleColumn
                                    classSchedules={classSchedules.filter(
                                        cs => cs.meetingHours === mhr
                                    )}
                                />
                            </Grid>
                        )
                    )}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ScheduleCalendar);
