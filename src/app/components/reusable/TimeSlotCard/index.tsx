import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Done from "@material-ui/icons/Done";
import DoneAll from "@material-ui/icons/DoneAll";
import * as React from "react";
import ClassSchedule from "../../../models/entities/class_schedule";
import Feedback from "../../../models/entities/feedback";

type TimeSlotVariant = "timeConstraint" | "feedback" | "scheduling";

interface IPropsType {
    variant: TimeSlotVariant;
    meetingHours: string;
    isAvailable?: boolean;
    isPreferred?: boolean;
    onClick?: () => void;
    classSchedule?: ClassSchedule;
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
            <Card>
                <CardActionArea onClick={onClick}>
                    <CardContent>
                        <Grid container direction="row" justify="space-between">
                            <Grid item>
                                <Typography variant="caption">
                                    {meetingHours}
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
