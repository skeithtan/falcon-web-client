import Grid from "@material-ui/core/Grid";
import * as React from "react";
import FacultyLoadingFacultyMember from "../../../../../../../../models/entities/faculty_loading_faculty_member";
import MeetingDays from "../../../../../../../../models/enums/meeting_days";
import FacultyScheduleSection from "./components/FacultyScheduleSection";

interface IPropsType {
    facultyMember: FacultyLoadingFacultyMember;
}

export default class FacultySchedule extends React.Component<IPropsType> {
    public render() {
        const { facultyMember } = this.props;
        return (
            <Grid container direction="column" spacing={24} wrap="nowrap">
                <Grid item>
                    <FacultyScheduleSection
                        facultyMember={facultyMember}
                        meetingDays={MeetingDays.MondayThursday}
                    />
                </Grid>

                <Grid item>
                    <FacultyScheduleSection
                        facultyMember={facultyMember}
                        meetingDays={MeetingDays.TuesdayFriday}
                    />
                </Grid>
            </Grid>
        );
    }
}
