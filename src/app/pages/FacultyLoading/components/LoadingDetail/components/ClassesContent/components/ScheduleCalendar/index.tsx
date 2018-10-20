import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import MeetingHours from "../../../../../../../../models/enums/meeting_hours";
import ScheduleColumn from "../ScheduleColumn";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class ScheduleCalendar extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
                <Grid item container direction="row">
                    {Array.from(Object.keys(MeetingHours)).map(mhr => (
                        <Grid item xs key={mhr}>
                            Hello, World. {mhr}
                        </Grid>
                    ))}
                </Grid>
                <Grid item container>
                    {Array.from(Object.keys(MeetingHours)).map(
                        (mhr: MeetingHours) => (
                            <Grid item xs key={mhr}>
                                <ScheduleColumn meetingHour={mhr} />
                            </Grid>
                        )
                    )}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ScheduleCalendar);
