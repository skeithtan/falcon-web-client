import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import FormClassSchedule from "../../../../../../../../../../models/entities/form_class_schedule";
import { MeetingDaysReadable } from "../../../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";

interface IPropsType {
    classSchedule: FormClassSchedule;
    onRemoveClick: () => void;
}

export default class AddClassesItem extends React.Component<IPropsType> {
    public render() {
        const { classSchedule, onRemoveClick } = this.props;
        return (
            <TableRow>
                <TableCell>
                    {MeetingDaysReadable.get(classSchedule.meetingDays)}
                </TableCell>
                <TableCell>
                    {MeetingHoursReadable.get(classSchedule.meetingHours)}
                </TableCell>
                <TableCell>{classSchedule.room}</TableCell>
                <TableCell>{classSchedule.course}</TableCell>
                <TableCell>{classSchedule.section}</TableCell>
                <TableCell>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onRemoveClick}
                    >
                        Remove
                    </Button>
                </TableCell>
            </TableRow>
        );
    }
}
