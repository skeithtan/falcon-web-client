import { observable } from "mobx";
import FacultyLoadingFacultyMember from "../entities/faculty_loading_faculty_member";

export default class ManualAssignFacultyForm {
    @observable
    public facultyMember?: FacultyLoadingFacultyMember = undefined;
}
