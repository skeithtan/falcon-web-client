import { observable } from "mobx";
import RecommendationFacultyMember from "../entities/recommendation_faculty_member";

export default class AssignFacultyDialog {
    @observable
    public facultyMember?: RecommendationFacultyMember = undefined;
}
