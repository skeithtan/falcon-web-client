import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddExtensionWorkForm from "../../models/forms/add_extension_work_form";

export class AddExtensionWorkFormState extends FormState<AddExtensionWorkForm> {
    @observable
    public form: AddExtensionWorkForm = new AddExtensionWorkForm();

    public resetForm() {
        this.form = new AddExtensionWorkForm();
    }
}

export default new AddExtensionWorkFormState();
