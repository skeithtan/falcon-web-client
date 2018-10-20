import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import TimeSlotCard from "../../../../../../../../../../components/reusable/TimeSlotCard";
import FacultyLoadingFacultyMember from "../../../../../../../../../../models/entities/faculty_loading_faculty_member";
import MeetingDays, {
    MeetingDaysReadable,
} from "../../../../../../../../../../models/enums/meeting_days";
import MeetingHours, {
    MeetingHoursReadable,
} from "../../../../../../../../../../models/enums/meeting_hours";

interface IPropsType {
    meetingDays: MeetingDays;
    facultyMember: FacultyLoadingFacultyMember;
}

export default class FacultyScheduleSection extends React.Component<
    IPropsType
> {
    public render() {
        const {
            meetingDays,
            facultyMember: { timeConstraints },
        } = this.props;
        return (
            <Grid item container direction="column" spacing={16}>
                <Grid item>
                    <Typography variant="h6">
                        {MeetingDaysReadable.get(meetingDays) as MeetingDays}
                    </Typography>
                </Grid>
                <Grid item container direction="row" spacing={0}>
                    {Array.from(MeetingHoursReadable).map(([mhrEnum]: any) => {
                        const timeConstraint = timeConstraints.find(
                            tc =>
                                tc.meetingDays === meetingDays &&
                                tc.meetingHours === mhrEnum
                        );

                        return (
                            <Grid item xs key={mhrEnum}>
                                <TimeSlotCard
                                    variant="timeConstraint"
                                    meetingHours={
                                        MeetingHoursReadable.get(
                                            mhrEnum
                                        ) as MeetingHours
                                    }
                                    isAvailable={timeConstraint !== undefined}
                                    isPreferred={
                                        timeConstraint !== undefined &&
                                        timeConstraint.isPreferred
                                    }
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        );
    }
}
