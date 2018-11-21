import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddClassForm from "../../models/forms/add_class_form";

export class AddClassDialogState extends FormState<AddClassForm> {
    @observable
    public form: AddClassForm = new AddClassForm();

    public resetForm() {
        this.form = new AddClassForm();
    }
}

export default new AddClassDialogState();
