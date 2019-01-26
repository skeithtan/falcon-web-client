import { observable } from "mobx";
import Entity from "../../interfaces/entity";
import MeetingDays from "../enums/meeting_days";
import MeetingHours from "../enums/meeting_hours";
import TimeConstraintType from "../enums/time_constraint_type";

export default class TimeConstraint extends Entity {
    @observable
    public type: TimeConstraintType;

    @observable
    public otherReason?: string;

    @observable
    public meetingDays: MeetingDays;

    @observable
    public meetingHours: MeetingHours;
}
