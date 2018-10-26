import { computed, observable } from "mobx";
import FetchableState from "../../interfaces/fetchable_state";
import ClassSchedule from "../../models/entities/class_schedule";
import Subject from "../../models/entities/subject";
import MeetingDays from "../../models/enums/meeting_days";
import autoAssignWizardState, {
    AutoAssignWizardState,
} from "./auto_assign_wizard";
import classScheduleDetailsState, {
    ClassScheduleDetailsState,
} from "./class_schedule_details";

export class ClassesTabState extends FetchableState {
    @observable
    public classSchedules?: Map<number, ClassSchedule> = undefined;

    @observable
    public activeClassScheduleId?: number = undefined;

    @observable
    public subjects?: Subject[] = undefined;

    @observable
    public activeMeetingDays: MeetingDays = MeetingDays.MondayThursday;

    @observable
    public showOnlyUnassigned: boolean = false;

    @observable
    public classScheduleDetailsState: ClassScheduleDetailsState = classScheduleDetailsState;

    @observable
    public autoAssignWizardState: AutoAssignWizardState = autoAssignWizardState;

    @computed
    get activeMeetingDaysClassSchedules() {
        if (this.showOnlyUnassigned) {
            return Array.from(this.classSchedules!.values())
                .filter(cs => cs.facultyMember === undefined)
                .filter(cs => cs.meetingDays === this.activeMeetingDays);
        }

        return Array.from(this.classSchedules!.values()).filter(
            cs => cs.meetingDays === this.activeMeetingDays
        );
    }

    @computed
    get activeClassSchedule() {
        if (!this.classSchedules || !this.activeClassScheduleId) {
            return undefined;
        }

        return this.classSchedules!.get(this.activeClassScheduleId);
    }
}

export default new ClassesTabState();
