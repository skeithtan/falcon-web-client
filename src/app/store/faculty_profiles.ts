import * as _ from "lodash";
import { computed, observable } from "mobx";
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
import profilePrintPreviewState, {
    ProfilePrintPreviewState,
} from "./faculty_profiles/profile_print_preview";
import updateFacultyMemberFormState, {
    UpdateFacultyMemberFormState,
} from "./faculty_profiles/update_faculty_member_form";

export class FacultyProfilesState extends FetchableState {
    @observable
    public facultyMembers?: Map<number, FacultyMember> = undefined;

    @observable
    public addFacultyMemberFormState: AddFacultyMemberFormState = addFacultyMemberFormState;

    @observable
    public updateFacultyMemberFormState: UpdateFacultyMemberFormState = updateFacultyMemberFormState;

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

    @observable
    public profilePrintPreviewState: ProfilePrintPreviewState = profilePrintPreviewState;

    @observable
    public activeFacultyId?: number = undefined;

    @computed
    get activeFacultyMember() {
        if (!this.activeFacultyId || !this.facultyMembers) {
            return undefined;
        }

        return this.facultyMembers!.get(this.activeFacultyId);
    }

    @computed
    get segregatedFacultyMembers() {
        const facultyMembers = Array.from(this.facultyMembers!.values());
        return _.groupBy(facultyMembers, "type");
    }
}

export default new FacultyProfilesState();
