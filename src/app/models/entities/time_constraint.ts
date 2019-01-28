import { observable } from "mobx";
import Entity from "../../interfaces/entity";
import AvailabilityType from "../enums/availability_type";
import MeetingDays from "../enums/meeting_days";
import MeetingHours from "../enums/meeting_hours";

export default class TimeConstraint extends Entity {
    @observable
    public availabilityType: AvailabilityType;

    @observable
    public otherReason?: string;

    @observable
    public meetingDays: MeetingDays;

    @observable
    public meetingHours: MeetingHours;
}
