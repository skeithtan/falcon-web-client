import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Done from "@material-ui/icons/Done";
import DoneAll from "@material-ui/icons/DoneAll";
import * as React from "react";
import FacultyClassSchedule from "../../../models/entities/faculty_class_schedule";
import Feedback from "../../../models/entities/feedback";
import MeetingHours, {
    MeetingHoursReadable,
} from "../../../models/enums/meeting_hours";

type TimeSlotVariant = "timeConstraint" | "feedback" | "scheduling";

interface IPropsType {
    variant: TimeSlotVariant;
    meetingHours: MeetingHours;
    isAvailable?: boolean;
    isPreferred?: boolean;
    onClick?: () => void;
    classSchedule?: FacultyClassSchedule;
    feedback?: Feedback;
}

export default class TimeSlotCard extends React.Component<IPropsType> {
    public render() {
        const {
            // variant,
            meetingHours,
            isAvailable,
            isPreferred,
            onClick,
            // classSchedule,
            // feedback,
        } = this.props;
        return (
            <Card square>
                <CardActionArea onClick={onClick}>
                    <CardContent>
                        <Grid container direction="row" justify="space-between">
                            <Grid item>
                                <Typography variant="caption">
                                    {MeetingHoursReadable.get(meetingHours)}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {isAvailable && <Done />}
                                {isPreferred && <DoneAll />}
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}
