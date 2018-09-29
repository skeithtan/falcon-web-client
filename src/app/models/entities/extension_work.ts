import { observable } from "mobx";
import FacultyMemberSubdocument from "../../interfaces/faculty_subdocuments";
import ExtensionWorkRole from "../enums/extension_work_role";

export default class ExtensionWork extends FacultyMemberSubdocument {
    @observable
    public roles: ExtensionWorkRole[];

    @observable
    public venue: string;
}
