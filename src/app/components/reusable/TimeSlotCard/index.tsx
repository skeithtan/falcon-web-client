import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Done from "@material-ui/icons/Done";
import DoneAll from "@material-ui/icons/DoneAll";
import * as classNames from "classnames";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import FacultyClassSchedule from "../../../models/entities/faculty_class_schedule";
import Feedback from "../../../models/entities/feedback";
import MeetingHours, { MeetingHoursReadable } from "../../../models/enums/meeting_hours";
import styles from "./styles";

type TimeSlotVariant = "timeConstraint" | "feedback" | "scheduling";

interface IPropsType {
    variant: TimeSlotVariant;
    meetingHours: MeetingHours;
    isAvailable?: boolean;
    isPreferred?: boolean;
    onClick?: () => void;
    classSchedule?: FacultyClassSchedule;
    feedback?: Feedback;
    classes: IStyleClasses;
}

class TimeSlotCard extends React.Component<IPropsType> {
    public render() {
        const {
            // variant,
            meetingHours,
            isAvailable,
            isPreferred,
            onClick,
            // classSchedule,
            // feedback,
            classes,
        } = this.props;
        return (
            <Card square className={classes.card}>
                <CardContent
                    onClick={onClick}
                    className={classNames(
                        classes.card,
                        isAvailable && !isPreferred && classes.availableCard,
                        isPreferred && classes.preferredCard
                    )}
                >
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography variant="caption">
                                {MeetingHoursReadable.get(meetingHours)}
                            </Typography>
                        </Grid>
                        <Grid item>
                            {isAvailable && !isPreferred && <Done />}
                            {isPreferred && <DoneAll />}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(TimeSlotCard);
