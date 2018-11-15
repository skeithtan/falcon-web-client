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
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";

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
                        const timeConstraint = timeConstraints.find(
                            tc =>
                                tc.meetingDays === meetingDays &&
                                tc.meetingHours === mhrEnum
                        );

                        const classSchedule = classSchedules.find(
                            cs =>
                                cs.meetingDays === meetingDays &&
                                cs.meetingHours === mhrEnum
                        );

                        return (
                            <Grid item xs key={mhrEnum}>
                                <TimeSlotCard
                                    meetingHours={mhrEnum}
                                    isAvailable={timeConstraint !== undefined}
                                    classSchedule={classSchedule}
                                    feedback={
                                        classSchedule && classSchedule.feedback
                                    }
                                    isPreferred={
                                        timeConstraint !== undefined &&
                                        timeConstraint.isPreferred
                                    }
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Card>
        );
    }
}
