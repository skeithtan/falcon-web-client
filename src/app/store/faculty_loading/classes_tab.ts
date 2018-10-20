import { observable } from "mobx";
import FetchableState from "../../interfaces/fetchable_state";
import ClassSchedule from "../../models/entities/class_schedule";
import MeetingDays from "../../models/enums/meeting_days";

export class ClassesTabState extends FetchableState {
    @observable
    public classSchedules?: Map<number, ClassSchedule> = undefined;

    @observable
    public activeTab: MeetingDays = MeetingDays.MondayThursday;

    @observable
    public showOnlyUnassigned: boolean = false;
}

export default new ClassesTabState();
