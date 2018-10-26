import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import FacultyClassSchedule from "../../../../../../models/entities/faculty_class_schedule";
import FeedbackStatus, {
    FeedbackStatusReadable,
} from "../../../../../../models/enums/feedback_status";

interface IPropsType {
    classSchedule: FacultyClassSchedule;
    feedback: FeedbackStatus;
    onChange: (event: any) => void;
}

export default class ClassScheduleFeedbackItem extends React.Component<
    IPropsType
> {
    public render() {
        const { classSchedule, onChange, feedback } = this.props;
        return (
            <Card>
                <CardContent>
                    <Typography variant="h6">{`${classSchedule.subject.code} ${
                        classSchedule.section
                    }`}</Typography>
                    <Typography variant="subtitle1">
                        Meeting Days and Hours
                    </Typography>
                    <Typography>Room</Typography>
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
                                <MenuItem key={typeEnum} value={typeEnum}>
                                    {typeReadable}
                                </MenuItem>
                            )
                        )}
                    </TextField>
                </CardContent>
            </Card>
        );
    }
}
