import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddTermForm from "../../models/forms/add_term_form";

export class AddTermFormState extends FormState<AddTermForm> {
    @observable
    public form: AddTermForm = new AddTermForm();

    public resetForm() {
        this.form = new AddTermForm();
    }
}

export default new AddTermFormState();
