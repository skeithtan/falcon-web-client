import { computed, observable } from "mobx";
import Entity from "../../interfaces/entity";
import FacultyProfile from "./faculty_profile";

export default class RecommendationFacultyMember extends Entity {
    @observable
    public facultyMember: FacultyProfile;

    @observable
    public score: number;

    @observable
    public pros: string[];

    @observable
    public cons: string[];

    @observable
    public errors: string[];

    @computed
    get fullName() {
        return `${this.facultyMember.firstName} ${this.facultyMember.lastName}`;
    }
}
