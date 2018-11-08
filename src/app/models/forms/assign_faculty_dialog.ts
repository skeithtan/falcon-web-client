import { observable } from "mobx";
import FacultyProfile from "../entities/faculty_profile";

export default class AssignFacultyDialog {
    @observable
    public facultyMember?: FacultyProfile = undefined;
}
