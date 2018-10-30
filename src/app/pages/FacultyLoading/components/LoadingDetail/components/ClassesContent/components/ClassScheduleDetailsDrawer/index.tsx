import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DetailItem from "../../../../../../../../components/reusable/DetailItem";
import DrawerForm from "../../../../../../../../components/reusable/DrawerForm";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import ClassSchedule from "../../../../../../../../models/entities/class_schedule";
import MeetingDays, {
    MeetingDaysReadable,
} from "../../../../../../../../models/enums/meeting_days";
import MeetingHours, {
    MeetingHoursReadable,
} from "../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class ClassScheduleDetailsDrawer extends React.Component<
    IPropsType
> {
    public onClose = () => {
        FacultyLoadingController.toggleClassScheduleDetails(false);
    };

    public onRemoveClick = (classSchedule: ClassSchedule) => () => {
        if (confirm("Are you sure you want to delete this class?")) {
            FacultyLoadingController.removeClassSchedule(classSchedule).catch(
                (e: Error) =>
                    alert("An error occurred while deleting the class.")
            );
        }
    };

    public onAssignFacultyClick = () => {
        // TODO: this
    };

    public renderActiveClassSchedule = () => {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const {
            activeClassSchedule,
            classScheduleDetailsState,
        } = classesTabState;
        const { form } = classScheduleDetailsState;
        return (
            <Grid container direction="column" spacing={16} wrap="nowrap">
                <Grid item>
                    <List>
                        <DetailItem
                            field="Subject Code"
                            value={activeClassSchedule!.subjectCode}
                        />
                        <DetailItem
                            field="Subject Name"
                            value={activeClassSchedule!.subjectName}
                        />
                        <DetailItem
                            field="Meeting Days"
                            value={
                                MeetingDaysReadable.get(
                                    activeClassSchedule!.meetingDays
                                ) as MeetingDays
                            }
                        />
                        <DetailItem
                            field="Meeting Hours"
                            value={
                                MeetingHoursReadable.get(
                                    activeClassSchedule!.meetingHours
                                ) as MeetingHours
                            }
                        />
                        <DetailItem
                            field="Section"
                            value={activeClassSchedule!.section}
                        />
                        <DetailItem
                            field="Room"
                            value={activeClassSchedule!.room}
                        />
                        <DetailItem
                            field="Course"
                            value={activeClassSchedule!.course}
                        />
                    </List>
                </Grid>

                <Grid item>
                    <CardActions>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={this.onRemoveClick(activeClassSchedule!)}
                        >
                            Remove
                        </Button>
                    </CardActions>
                </Grid>

                <Grid item>
                    <Divider />
                </Grid>

                <Grid item container direction="column" spacing={16}>
                    <CardContent>
                        <Typography variant="h6">Faculty Members</Typography>
                        <Typography variant="caption">
                            The faculty members are arranged according to their
                            eligibility for assignment to the class.
                        </Typography>

                        {/* TODO: Sorted list of faculty candidate items */}
                        
                    </CardContent>
                    <CardActions>
                        <Button
                            disabled={form.facultyMember === undefined}
                            onClick={this.onAssignFacultyClick}
                            color="primary"
                        >
                            Assign Faculty Member
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        );
    };

    public render() {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const {
            classScheduleDetailsState,
            activeClassSchedule,
        } = classesTabState;
        return (
            <DrawerForm
                disablePadding
                open={classScheduleDetailsState.isShowing}
                onClose={this.onClose}
                formTitle={
                    activeClassSchedule
                        ? `${activeClassSchedule.subjectCode} ${
                              activeClassSchedule.section
                          }`
                        : "Class Details"
                }
            >
                {activeClassSchedule && this.renderActiveClassSchedule()}
            </DrawerForm>
        );
    }
}
