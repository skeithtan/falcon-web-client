import * as React from "react";
import MeetingHours from "../../../../../../../../models/enums/meeting_hours";

interface IPropsType {
    meetingHour: MeetingHours;
}

export default class ScheduleColumn extends React.Component<IPropsType> {
    public render() {
        const { meetingHour } = this.props;
        return <div>{meetingHour}</div>;
    }
}
