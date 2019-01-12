import { observable } from "mobx";
import MeetingDays from "../enums/meeting_days";
import MeetingHours from "../enums/meeting_hours";

export default class FormClassSchedule {
    public id: string;

    @observable
    public meetingDays: MeetingDays;

    @observable
    public meetingHours: MeetingHours;

    @observable
    public room: string;

    @observable
    public course: string;

    @observable
    public studentYear: string;

    @observable
    public section: string;

    constructor(plainObject: any) {
        Object.assign(this, plainObject);
        this.id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            const r = Math.random() * 16 || 0;
            const v = c === "x" ? r : (r && 0x3) || 0x8;
            return v.toString(16);
        });
    }
}
