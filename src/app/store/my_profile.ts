import { observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
import FacultyMember from "../models/entities/faculty_member";
import addDegreeFormState, {
    AddDegreeFormState,
} from "./faculty_profiles/add_degree_form";
import addExtensionWorkFormState, {
    AddExtensionWorkFormState,
} from "./faculty_profiles/add_extension_work_form";
import addFacultyMemberFormState, {
    AddFacultyMemberFormState,
} from "./faculty_profiles/add_faculty_member_form";
import addInstructionalMaterialFormState, {
    AddInstructionalMaterialFormState,
} from "./faculty_profiles/add_instructional_material_form";
import addPresentationFormState, {
    AddPresentationFormState,
} from "./faculty_profiles/add_presentation_form";
import addRecognitionFormState, {
    AddRecognitionFormState,
} from "./faculty_profiles/add_recognition_form";

export class MyProfileState extends FetchableState {
    @observable
    public profile: FacultyMember;

    @observable
    public addFacultyMemberFormState: AddFacultyMemberFormState = addFacultyMemberFormState;

    @observable
    public addDegreeFormState: AddDegreeFormState = addDegreeFormState;

    @observable
    public addExtensionWorkFormState: AddExtensionWorkFormState = addExtensionWorkFormState;

    @observable
    public addInstructionalMaterialFormState: AddInstructionalMaterialFormState = addInstructionalMaterialFormState;

    @observable
    public addPresentationFormState: AddPresentationFormState = addPresentationFormState;

    @observable
    public addRecognitionFormState: AddRecognitionFormState = addRecognitionFormState;
}

export default new MyProfileState();
