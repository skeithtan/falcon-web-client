import { observable } from "mobx";
import Entity from "../../interfaces/entity";
import FacultyMemberType from "../enums/faculty_member_type";
import ClassSchedule from "./class_schedule";
import TimeConstraint from "./time_constraint";

export default class FacultyLoadingFacultyMember extends Entity {
    public facultyId: number;

    public firstName: string;

    public lastName: string;

    public pnuId: string;

    @observable
    public type: FacultyMemberType;

    @observable
    public classSchedules: ClassSchedule[];

    @observable
    public timeConstraints: TimeConstraint[];

    constructor(plainObject: any) {
        super(plainObject);
        this.classSchedules = plainObject.classSchedules.map(
            (cs: any) => new ClassSchedule(cs)
        );

        this.timeConstraints = plainObject.timeConstraints.map(
            (tc: any) => new TimeConstraint(tc)
        );
    }
}
