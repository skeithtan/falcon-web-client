import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddDegreeForm from "../../models/forms/add_degree_form";

export class AddDegreeFormState extends FormState<AddDegreeForm> {
    @observable
    public form: AddDegreeForm = new AddDegreeForm();

    public resetForm() {
        this.form = new AddDegreeForm();
    }
}

export default new AddDegreeFormState();
