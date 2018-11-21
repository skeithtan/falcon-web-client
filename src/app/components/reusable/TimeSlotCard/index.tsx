import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Done from "@material-ui/icons/Done";
import DoneAll from "@material-ui/icons/DoneAll";
import ErrorOutline from "@material-ui/icons/ErrorOutline";
import * as classNames from "classnames";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import FacultyClassSchedule from "../../../models/entities/faculty_class_schedule";
import Feedback from "../../../models/entities/feedback";
import FeedbackStatus from "../../../models/enums/feedback_status";
import MeetingHours, {
    MeetingHoursReadable,
} from "../../../models/enums/meeting_hours";
import styles from "./styles";

interface IPropsType {
    meetingHours: MeetingHours;
    isAvailable?: boolean;
    isPreferred?: boolean;
    isThirdConsecutive?: boolean;
    classSchedule?: FacultyClassSchedule;
    feedback?: Feedback;
    classes: IStyleClasses;
}

class TimeSlotCard extends React.Component<IPropsType> {
    public render() {
        const {
            meetingHours,
            isAvailable,
            isPreferred,
            isThirdConsecutive,
            classSchedule,
            feedback,
            classes,
        } = this.props;
        return (
            <Card square className={classes.card}>
                <CardContent
                    className={classNames(
                        classes.card,
                        isAvailable && !isPreferred && classes.availableCard,
                        isPreferred && classes.preferredCard
                    )}
                >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                        wrap="nowrap"
                        spacing={16}
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            wrap="nowrap"
                        >
                            <Grid item>
                                <Typography variant="caption">
                                    {MeetingHoursReadable.get(meetingHours)}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="row"
                                justify="flex-end"
                            >
                                {isThirdConsecutive && (
                                    <Tooltip title="Third consecutive class">
                                        <Grid item>
                                            <ErrorOutline color="secondary" />
                                        </Grid>
                                    </Tooltip>
                                )}
                                {isAvailable && !isPreferred && (
                                    <Grid item>
                                        <Done />
                                    </Grid>
                                )}
                                {isPreferred && (
                                    <Grid item>
                                        <DoneAll />
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                        {classSchedule && (
                            <Grid
                                item
                                container
                                spacing={8}
                                direction="column"
                                wrap="nowrap"
                            >
                                <Grid item>
                                    <Typography variant="body1">
                                        {`${classSchedule.subject.code} ${
                                            classSchedule.section
                                        }`}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption">
                                        {classSchedule.subject.name}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="overline">
                                        {classSchedule.room}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                        {feedback && (
                            <Grid item>
                                <Typography
                                    variant="overline"
                                    color={
                                        feedback.status ===
                                        FeedbackStatus.Rejected
                                            ? "secondary"
                                            : "default"
                                    }
                                >
                                    {feedback.status}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(TimeSlotCard);
