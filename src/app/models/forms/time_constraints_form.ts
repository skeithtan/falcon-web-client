import { computed, observable } from "mobx";
import TimeConstraint from "../entities/time_constraint";
import MeetingDays from "../enums/meeting_days";

export default class TimeConstraintsForm {
    @observable
    public timeConstraints: TimeConstraint[] = [];

    @computed
    get mondayThursdayCount(): number {
        return this.timeConstraints.filter(
            tc => tc.meetingDays === MeetingDays.MondayThursday
        ).length;
    }

    @computed
    get tuesdayFridayCount(): number {
        return this.timeConstraints.filter(
            tc => tc.meetingDays === MeetingDays.TuesdayFriday
        ).length;
    }
}
