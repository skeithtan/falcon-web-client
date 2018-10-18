import { observable } from "mobx";
import Entity from "../../interfaces/entity";
import MeetingDays from "../enums/meeting_days";
import MeetingHours from "../enums/meeting_hours";
import Term from "./term";

export default class TimeConstraint extends Entity {
    @observable
    public isPreferred: boolean;

    @observable
    public meetingDays: MeetingDays;

    @observable
    public meetingHours: MeetingHours;

    @observable
    public term: Term;
}
