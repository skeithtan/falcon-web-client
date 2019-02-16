import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import ClassSchedule from "../../../../../../../../../../models/entities/class_schedule";
import { MeetingDaysReadable } from "../../../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";

interface IPropsType {
    classSchedule: ClassSchedule;
}

export default class UnassignedClassItem extends React.Component<IPropsType> {
    public render() {
        const { classSchedule } = this.props;
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
                <TableCell>{`${classSchedule.studentYearReadable}-${
                    classSchedule.section
                }`}</TableCell>
            </TableRow>
        );
    }
}
