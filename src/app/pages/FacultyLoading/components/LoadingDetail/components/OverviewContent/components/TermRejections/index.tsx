import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StateWrapper from "../../../../../../../../components/reusable/StateWrapper";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import ClassSchedule from "../../../../../../../../models/entities/class_schedule";
import FacultyLoadingTab from "../../../../../../../../models/enums/faculty_loading_tab";
import FeedbackStatus from "../../../../../../../../models/enums/feedback_status";
import { MeetingDaysReadable } from "../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import OverviewCard from "../OverviewCard";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class TermRejections extends React.Component<IPropsType> {
    public onRejectionClick = (cs: ClassSchedule) => () => {
        const { facultyLoading } = this.props!;
        const {
            classesTabState: { classScheduleDetailsState },
        } = facultyLoading!;

        FacultyLoadingController.setActiveTab(FacultyLoadingTab.Classes);
        FacultyLoadingController.setActiveClassSchedule(cs.id);
        classScheduleDetailsState.isShowing = true;
    };

    public render() {
        const { facultyLoading } = this.props;
        const { activeTerm } = facultyLoading!;
        const rejectedCS = activeTerm!.classSchedules!.filter(
            cs =>
                cs.facultyMember &&
                cs.facultyMember!.feedback === FeedbackStatus.Rejected
        );
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
                    <StateWrapper fetchableState={facultyLoading!.fetchStatus}>
                        {() => (
                            <React.Fragment>
                                {rejectedCS.length === 0 && (
                                    <Typography>
                                        There are no rejections for the term.
                                    </Typography>
                                )}

                                {rejectedCS.map(cs => (
                                    <Grid item xs key={cs.id}>
                                        <OverviewCard
                                            onRejectionClick={this.onRejectionClick(
                                                cs
                                            )}
                                            message={`${
                                                cs.facultyMember!.firstName
                                            } ${
                                                cs.facultyMember!.lastName
                                            } has rejected ${cs.subjectCode} ${
                                                cs.studentYearReadable
                                            }-${
                                                cs.section
                                            } on ${MeetingDaysReadable.get(
                                                cs.meetingDays
                                            )} ${MeetingHoursReadable.get(
                                                cs.meetingHours
                                            )}`}
                                        />
                                    </Grid>
                                ))}
                            </React.Fragment>
                        )}
                    </StateWrapper>
                </Grid>
            </Grid>
        );
    }
}
