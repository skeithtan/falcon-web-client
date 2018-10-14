import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import UpdateFacultyMemberForm from "../../models/forms/update_faculty_member_form";

export class UpdateFacultyMemberFormState extends FormState<
    UpdateFacultyMemberForm
> {
    @observable
    public form: UpdateFacultyMemberForm = new UpdateFacultyMemberForm();

    public resetForm() {
        this.form = new UpdateFacultyMemberForm();
    }
}

export default new UpdateFacultyMemberFormState();
