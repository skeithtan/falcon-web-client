import { computed, observable } from "mobx";
import FacultyLoadingFacultyMember from "../entities/faculty_loading_faculty_member";
import TimeConstraint from "../entities/time_constraint";
import AvailabilityType from "../enums/availability_type";
import MeetingDays, { MeetingDaysReadable } from "../enums/meeting_days";
import { MeetingHoursReadable } from "../enums/meeting_hours";

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

    public prefillForm(flfm: FacultyLoadingFacultyMember) {
        if (flfm.timeConstraints.length > 0) {
            this.timeConstraints = flfm.timeConstraints.map(tc => ({...tc}));
        } else {
            Array.from(MeetingDaysReadable.entries()).map(([md, mdStr]) => {
                Array.from(MeetingHoursReadable.entries()).map(([mh, mhStr]) => {
                    this.timeConstraints.push(
                        new TimeConstraint({
                            availabilityType: AvailabilityType.Available,
                            meetingDays: md,
                            meetingHours: mh,
                        })
                    );
                });
            });
        }
    }
}
