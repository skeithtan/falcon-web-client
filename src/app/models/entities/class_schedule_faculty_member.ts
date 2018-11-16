import { computed, observable } from "mobx";
import Entity from "../../interfaces/entity";
import FacultyMemberType from "../enums/faculty_member_type";
import FeedbackStatus from "../enums/feedback_status";

export default class ClassScheduleFacultyMember extends Entity {
    @observable
    public firstName: string;

    @observable
    public lastName: string;

    @observable
    public pnuId: string;

    @observable
    public type: FacultyMemberType;

    @observable
    public feedback: FeedbackStatus;

    @computed
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
