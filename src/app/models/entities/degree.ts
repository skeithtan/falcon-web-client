import { observable } from "mobx";
import FacultyMemberSubdocument from "../../interfaces/faculty_subdocuments";
import DegreeLevel from "../enums/degree_level";

export default class Degree extends FacultyMemberSubdocument {
    @observable
    public level: DegreeLevel;

    @observable
    public completionYear: string;
}
