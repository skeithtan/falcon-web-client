import { observable } from "mobx";
import Entity from "../../interfaces/entity";
import FacultyLoadingFacultyMember from "./faculty_loading_faculty_member";

export default class Notice extends Entity {
    @observable
    public message: string;

    @observable
    public facultyMember: FacultyLoadingFacultyMember;
}
