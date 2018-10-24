import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import SubmitTimeConstraintsForm from "../../models/forms/submit_time_constraints_form";

export class SubmitTimeConstraintsFormState extends FormState<SubmitTimeConstraintsForm> {
    @observable
    public form: SubmitTimeConstraintsForm = new SubmitTimeConstraintsForm();

    public resetForm() {
        this.form = new SubmitTimeConstraintsForm();
    }
}

export default new SubmitTimeConstraintsFormState();
