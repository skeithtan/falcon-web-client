import { computed, observable } from "mobx";
import Entity from "../../interfaces/entity";
import FacultyMemberType from "../enums/faculty_member_type";
import LoadAmountStatus from "../enums/load_amount_status";
import FacultyClassSchedule from "./faculty_class_schedule";
import TimeConstraint from "./time_constraint";

export default class FacultyLoadingFacultyMember extends Entity {
    public facultyId: number;

    public firstName: string;

    public lastName: string;

    public pnuId: string;

    @observable
    public loadAmountStatus: LoadAmountStatus;

    @observable
    public type: FacultyMemberType;

    @observable
    public classSchedules: FacultyClassSchedule[];

    @observable
    public timeConstraints: TimeConstraint[];

    @observable
    public hasExternalLoad: boolean;

    @computed
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor(plainObject: any) {
        super(plainObject);
        this.classSchedules = plainObject.classSchedules.map(
            (cs: any) => new FacultyClassSchedule(cs)
        );

        this.timeConstraints = plainObject.timeConstraints.map(
            (tc: any) => new TimeConstraint(tc)
        );
    }
}
