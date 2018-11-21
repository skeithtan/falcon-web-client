import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddClassesForm from "../../models/forms/add_classes_form";

export class AddClassesDrawerState extends FormState<AddClassesForm> {
    @observable
    public form: AddClassesForm = new AddClassesForm();

    public resetForm() {
        this.form = new AddClassesForm();
    }
}

export default new AddClassesDrawerState();
