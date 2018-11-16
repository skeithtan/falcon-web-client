import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { MeetingDaysReadable } from "../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import OverviewCard from "../OverviewCard";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

export default class TermRejections extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading } = this.props;
        const { activeTerm } = facultyLoading!;
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Typography variant="h6">Rejections</Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    justify="space-between"
                    spacing={16}
                >
                    {activeTerm!.classSchedules.length === 0 && (
                        <Typography>
                            There are no rejections for the term.
                        </Typography>
                    )}
                    {activeTerm!.classSchedules.length > 0 &&
                        activeTerm!.classSchedules.map(cs => (
                            <React.Fragment key={cs.id}>
                                {cs.facultyMember && (
                                    <Grid item xs>
                                        <OverviewCard
                                            name={cs.facultyMember!.fullName}
                                            message={`${
                                                cs.facultyMember!.fullName
                                            } has rejected ${cs.subjectCode} ${
                                                cs.section
                                            } on ${MeetingDaysReadable.get(
                                                cs.meetingDays
                                            )} ${MeetingHoursReadable.get(
                                                cs.meetingHours
                                            )}`}
                                        />
                                    </Grid>
                                )}
                            </React.Fragment>
                        ))}
                </Grid>
            </Grid>
        );
    }
}
