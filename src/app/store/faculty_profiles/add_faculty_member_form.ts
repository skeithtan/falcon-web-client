import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddFacultyMemberForm from "../../models/forms/add_faculty_member_form";

export class AddFacultyMemberFormState extends FormState<AddFacultyMemberForm> {
    @observable
    public form: AddFacultyMemberForm = new AddFacultyMemberForm();
}

export default new AddFacultyMemberFormState();
