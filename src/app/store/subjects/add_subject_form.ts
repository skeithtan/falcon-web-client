import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddSubjectForm from "../../models/forms/add_subject_form";

export class AddSubjectFormState extends FormState<AddSubjectForm> {
    @observable
    public form: AddSubjectForm = new AddSubjectForm();

    public resetForm() {
        this.form = new AddSubjectForm();
    }
}

export default new AddSubjectFormState();
