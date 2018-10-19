import { observable } from "mobx";
import Entity from "../../interfaces/entity";
import MeetingDays from "../enums/meeting_days";
import MeetingHours from "../enums/meeting_hours";
import Feedback from "./feedback";
import Subject from "./subject";
import Term from "./term";

export default class ClassSchedule extends Entity {
    @observable
    public meetingDays: MeetingDays;

    @observable
    public meetingHours: MeetingHours;

    @observable
    public room: string;

    @observable
    public course: string;

    @observable
    public section: string;

    @observable
    public subject: Subject;

    @observable
    public feedback: Feedback;

    @observable
    public term: Term;

    constructor(plainObject: any) {
        super(plainObject);
        this.feedback = new Feedback(plainObject.feedback);
    }
}
