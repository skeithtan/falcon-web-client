import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import FacultyClassSchedule from "../../../../../../models/entities/faculty_class_schedule";
import FeedbackStatus, {
    FeedbackStatusReadable,
} from "../../../../../../models/enums/feedback_status";
import { MeetingDaysReadable } from "../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../models/enums/meeting_hours";
import styles from "./styles";

interface IPropsType {
    classSchedule: FacultyClassSchedule;
    feedback: FeedbackStatus;
    onChange: (event: any) => void;
    classes: IStyleClasses;
}

class ClassScheduleFeedbackItem extends React.Component<IPropsType> {
    public render() {
        const { classSchedule, onChange, feedback, classes } = this.props;
        return (
            <Card className={classes.feedbackItem}>
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        wrap="nowrap"
                        spacing={16}
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            spacing={8}
                            wrap="nowrap"
                        >
                            <Grid item>
                                <Typography variant="h6">{`${
                                    classSchedule.subject.code
                                } ${classSchedule.section}`}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    {`${MeetingDaysReadable.get(
                                        classSchedule.meetingDays
                                    )} ${MeetingHoursReadable.get(
                                        classSchedule.meetingHours
                                    )}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>{classSchedule.room}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField
                                select
                                label="Feedback"
                                variant="outlined"
                                onChange={onChange}
                                value={feedback}
                                fullWidth
                            >
                                {Array.from(FeedbackStatusReadable).map(
                                    ([typeEnum, typeReadable]) => (
                                        <MenuItem
                                            key={typeEnum}
                                            value={typeEnum}
                                        >
                                            {typeReadable}
                                        </MenuItem>
                                    )
                                )}
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ClassScheduleFeedbackItem);
