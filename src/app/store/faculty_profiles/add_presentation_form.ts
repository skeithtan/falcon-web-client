import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddPresentationForm from "../../models/forms/add_presentation_form";

export class AddPresentationFormState extends FormState<AddPresentationForm> {
    @observable
    public form: AddPresentationForm = new AddPresentationForm();

    public resetForm() {
        this.form = new AddPresentationForm();
    }
}

export default new AddPresentationFormState();
