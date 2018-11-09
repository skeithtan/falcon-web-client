import List from "@material-ui/core/List";
import * as React from "react";
import DetailItem from "../../../../../../../../../../components/reusable/DetailItem";
import FacultyClassSchedule from "../../../../../../../../../../models/entities/faculty_class_schedule";
import MeetingDays from "../../../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";

interface IPropsType {
    classSchedules: FacultyClassSchedule[];
}

export default class PrintScheduleSectionList extends React.Component<
    IPropsType
> {
    public render() {
        const { classSchedules } = this.props;
        return (
            <List>
                {classSchedules.map(
                    cs =>
                        cs.meetingDays === MeetingDays.MondayThursday && (
                            <DetailItem
                                key={cs.id}
                                field={
                                    MeetingHoursReadable.get(cs.meetingHours)!
                                }
                                value={`${cs.subject.name} ${cs.section} ${
                                    cs.room
                                }`}
                            />
                        )
                )}
            </List>
        );
    }
}
