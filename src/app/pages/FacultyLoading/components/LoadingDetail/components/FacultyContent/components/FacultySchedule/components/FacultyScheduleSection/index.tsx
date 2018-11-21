import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";
import TimeSlotCard from "../../../../../../../../../../components/reusable/TimeSlotCard";
import FacultyLoadingFacultyMember from "../../../../../../../../../../models/entities/faculty_loading_faculty_member";
import MeetingDays, {
    MeetingDaysReadable,
} from "../../../../../../../../../../models/enums/meeting_days";
import MeetingHours, {
    MeetingHoursReadable,
    twoMeetingHoursBefore,
} from "../../../../../../../../../../models/enums/meeting_hours";

interface IPropsType {
    meetingDays: MeetingDays;
    facultyMember: FacultyLoadingFacultyMember;
}

@observer
export default class FacultyScheduleSection extends React.Component<
    IPropsType
> {
    public render() {
        const {
            meetingDays,
            facultyMember: { timeConstraints, classSchedules },
        } = this.props;

        const timeConstraintsForMeetingDay = timeConstraints.filter(
            tc => tc.meetingDays === meetingDays
        );
        const classSchedulesForMeetingDay = classSchedules.filter(
            cs => cs.meetingDays === meetingDays
        );

        const classHoursOfTheDay = classSchedulesForMeetingDay.map(
            cs => cs.meetingHours
        );

        return (
            <Card>
                <Toolbar>
                    <Typography variant="h6">
                        {MeetingDaysReadable.get(meetingDays)}
                    </Typography>
                </Toolbar>
                <Grid
                    container
                    direction="row"
                    spacing={0}
                    alignItems="stretch"
                >
                    {Array.from(MeetingHoursReadable).map(([mhrEnum]) => {
                        const timeConstraint = timeConstraintsForMeetingDay.find(
                            tc => tc.meetingHours === mhrEnum
                        );

                        const cs = classSchedulesForMeetingDay.find(
                            c => c.meetingHours === mhrEnum
                        );

                        const tmhb = twoMeetingHoursBefore(mhrEnum);
                        const isThirdConsecutive =
                            Boolean(cs) &&
                            mhrEnum !== MeetingHours.AM_7_9 &&
                            mhrEnum !== MeetingHours.AM_9_11 &&
                            classHoursOfTheDay.includes(tmhb[0]) &&
                            classHoursOfTheDay.includes(tmhb[1]);

                        return (
                            <Grid item xs key={mhrEnum}>
                                <TimeSlotCard
                                    meetingHours={mhrEnum}
                                    isAvailable={timeConstraint !== undefined}
                                    classSchedule={cs}
                                    feedback={cs && cs.feedback}
                                    isPreferred={
                                        timeConstraint !== undefined &&
                                        timeConstraint.isPreferred
                                    }
                                    isThirdConsecutive={isThirdConsecutive}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Card>
        );
    }
}
