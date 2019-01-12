import { computed, observable } from "mobx";
import Entity from "../../interfaces/entity";
import MeetingDays from "../enums/meeting_days";
import MeetingHours from "../enums/meeting_hours";
import Program from "../enums/program";
import SubjectCategory from "../enums/subject_category";
import ClassScheduleFacultyMember from "./class_schedule_faculty_member";

export default class ClassSchedule extends Entity {
    @observable
    public meetingDays: MeetingDays;

    @observable
    public meetingHours: MeetingHours;

    @observable
    public room: string;

    @observable
    public studentYear: string;

    @observable
    public section: string;

    @observable
    public course: string;

    public subjectName: string;
    public subjectCode: string;
    public subjectDescription: string;
    public subjectCategory: SubjectCategory;
    public subjectProgram: Program;

    @observable
    public facultyMember?: ClassScheduleFacultyMember;

    @computed
    get studentYearReadable() {
        let readable = "";
        switch (this.studentYear) {
            case "1":
                readable = "I";
            case "2":
                readable = "II";
            case "3":
                readable = "III";
            case "4":
                readable = "IV";
        }
        return readable;
    }

    @computed
    get shortTitle() {
        return `${this.subjectCode} ${this.studentYearReadable}-${
            this.section
        }`;
    }

    constructor(plainObject: any) {
        super(plainObject);

        if (plainObject.facultyMember) {
            this.facultyMember = new ClassScheduleFacultyMember(
                plainObject.facultyMember!
            );
        }
    }
}
