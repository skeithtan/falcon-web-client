import { computed, observable } from "mobx";
import FetchableState from "../../interfaces/fetchable_state";
import ClassSchedule from "../../models/entities/class_schedule";
import Subject from "../../models/entities/subject";
import MeetingDays from "../../models/enums/meeting_days";
import classScheduleDetailsState, {
    ClassScheduleDetailsState,
} from "./class_schedule_details";

export class ClassesTabState extends FetchableState {
    @observable
    public classSchedules?: Map<number, ClassSchedule> = undefined;

    @observable
    public selectedClassScheduleId?: number = undefined;

    @observable
    public subjects?: Subject[] = undefined;

    @observable
    public activeMeetingDays: MeetingDays = MeetingDays.MondayThursday;

    @observable
    public showOnlyUnassigned: boolean = false;

    @observable
    public classScheduleDetailsState: ClassScheduleDetailsState = classScheduleDetailsState;

    @computed
    get activeMeetingDaysClassSchedules() {
        return Array.from(this.classSchedules!.values()).filter(
            cs => cs.meetingDays === this.activeMeetingDays
        );
    }

    @computed
    get activeClassSchedule() {
        if (!this.classSchedules || !this.selectedClassScheduleId) {
            return undefined;
        }

        return this.classSchedules!.get(this.selectedClassScheduleId);
    }
}

export default new ClassesTabState();
