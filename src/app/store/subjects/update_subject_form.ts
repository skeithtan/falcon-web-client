import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import UpdateSubjectForm from "../../models/forms/update_subject_form";

export class UpdateSubjectFormState extends FormState<UpdateSubjectForm> {
    @observable
    public form: UpdateSubjectForm = new UpdateSubjectForm();

    public resetForm() {
        this.form = new UpdateSubjectForm();
    }
}

export default new UpdateSubjectFormState();
