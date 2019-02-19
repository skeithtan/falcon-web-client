import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import ClassSchedule from "../../../../../../../../../../models/entities/class_schedule";
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    meetingDays: string;
    classSchedules: ClassSchedule[];
}

@inject("facultyLoading")
@observer
export default class ScheduleTable extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading, meetingDays, classSchedules } = this.props;
        const {
            classesTabState: {
                printTermScheduleState: { courseFilter },
            },
        } = facultyLoading!;
        const noCourseFilter = courseFilter === "";

        let classes = [];

        classes = classSchedules;

        if (!noCourseFilter) {
            classes = classSchedules.filter(cs => cs.course === courseFilter);
        }

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
                            {classes.map(cs => (
                                <TableRow key={cs.id}>
                                    <TableCell>
                                        {MeetingHoursReadable.get(
                                            cs.meetingHours
                                        )}
                                    </TableCell>
                                    <TableCell>{cs.subjectCode}</TableCell>
                                    <TableCell>{`${cs.studentYearReadable}-${cs.section}`}</TableCell>
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
