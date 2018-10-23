import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DetailItem from "../../../../../../../../components/reusable/DetailItem";
import DrawerForm from "../../../../../../../../components/reusable/DrawerForm";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import MeetingDays, {
    MeetingDaysReadable,
} from "../../../../../../../../models/enums/meeting_days";
import MeetingHours, {
    MeetingHoursReadable,
} from "../../../../../../../../models/enums/meeting_hours";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";

// TODO: Add faculty member section
// TODO: Remove button and function for classes

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

    public render() {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const {
            classScheduleDetailsState,
            selectedClassSchedule,
        } = classesTabState;
        return (
            <DrawerForm
                open={classScheduleDetailsState.isShowing}
                onClose={this.onClose}
                formTitle="Class Details"
            >
                <List>
                    <DetailItem
                        field="Subject Code"
                        value={selectedClassSchedule!.subjectCode}
                    />
                    <DetailItem
                        field="Subject Name"
                        value={selectedClassSchedule!.subjectName}
                    />
                    <DetailItem
                        field="Meeting Days"
                        value={
                            MeetingDaysReadable.get(
                                selectedClassSchedule!.meetingDays
                            ) as MeetingDays
                        }
                    />
                    <DetailItem
                        field="Meeting Hours"
                        value={
                            MeetingHoursReadable.get(
                                selectedClassSchedule!.meetingHours
                            ) as MeetingHours
                        }
                    />
                    <DetailItem
                        field="Section"
                        value={selectedClassSchedule!.section}
                    />
                    <DetailItem
                        field="Room"
                        value={selectedClassSchedule!.room}
                    />
                    <DetailItem
                        field="Course"
                        value={selectedClassSchedule!.course}
                    />
                </List>

                <Divider />
            </DrawerForm>
        );
    }
}
