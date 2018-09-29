import { validateSync } from "class-validator";
import { computed, observable } from "mobx";
import FacultyMember from "../models/entities/faculty_member";
import FetchableState from "../models/enums/fetchable_state";
import AddFacultyMemberForm from "../models/forms/add_faculty_member_form";
import { toValidationErrors } from "../utils/to_validation_errors";

export class FacultyProfilesState {
    @observable
    public fetchState: FetchableState = FetchableState.Unfetched;

    @observable
    public fetchError?: string = undefined;

    @observable
    public facultyMembers?: FacultyMember[] = undefined;

    @observable
    public addFacultyMemberFormIsShowing: boolean = false;

    @observable
    public addFacultyMemberForm: AddFacultyMemberForm = new AddFacultyMemberForm();

    @computed
    public get addFacultyMemberValidation() {
        const errors = validateSync(this.addFacultyMemberForm);
        return toValidationErrors(errors);
    }
}

export default new FacultyProfilesState();
