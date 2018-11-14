import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import ClassSchedule from "../../../../../../../../../../models/entities/class_schedule";
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";

interface IPropsType {
    meetingDays: string;
    classSchedules: ClassSchedule[];
}

export default class ScheduleTable extends React.Component<IPropsType> {
    public render() {
        const { meetingDays, classSchedules } = this.props;
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Typography variant="h6">{meetingDays}</Typography>
                </Grid>
                <Grid item>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Time</TableCell>
                                <TableCell>Subject</TableCell>
                                <TableCell>Section</TableCell>
                                <TableCell>Room</TableCell>
                                <TableCell>Course</TableCell>
                                <TableCell>Faculty</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {classSchedules.map(cs => (
                                <TableRow key={cs.id}>
                                    <TableCell>
                                        {MeetingHoursReadable.get(
                                            cs.meetingHours
                                        )}
                                    </TableCell>
                                    <TableCell>{cs.subjectCode}</TableCell>
                                    <TableCell>{cs.section}</TableCell>
                                    <TableCell>{cs.room}</TableCell>
                                    <TableCell>{cs.course}</TableCell>
                                    {!cs.facultyMember && (
                                        <TableCell>
                                            <i>No faculty assigned</i>
                                        </TableCell>
                                    )}
                                    {cs.facultyMember && (
                                        <TableCell>{`${
                                            cs.facultyMember!.firstName
                                        } ${
                                            cs.facultyMember!.lastName
                                        }`}</TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        );
    }
}
