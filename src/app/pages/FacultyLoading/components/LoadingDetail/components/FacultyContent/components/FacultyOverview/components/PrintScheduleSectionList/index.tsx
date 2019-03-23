import List from "@material-ui/core/List";
import { observer } from "mobx-react";
import * as React from "react";
import DetailItem from "../../../../../../../../../../components/reusable/DetailItem";
import FacultyClassSchedule from "../../../../../../../../../../models/entities/faculty_class_schedule";
import MeetingDays from "../../../../../../../../../../models/enums/meeting_days";
import { MeetingHoursReadable } from "../../../../../../../../../../models/enums/meeting_hours";

interface IPropsType {
    classSchedules: FacultyClassSchedule[];
}

@observer
export default class PrintScheduleSectionList extends React.Component<
    IPropsType
> {
    public render() {
        const { classSchedules } = this.props;
        console.log("rerender", classSchedules.length);
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
                {classSchedules.map(
                    cs =>
                        cs.meetingDays === MeetingDays.TuesdayFriday && (
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
