import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import TimeConstraintsForm from "../../models/forms/time_constraints_form";

export class TimeConstraintsFormState extends FormState<TimeConstraintsForm> {
    @observable
    public form: TimeConstraintsForm = new TimeConstraintsForm();

    public resetForm() {
        this.form = new TimeConstraintsForm();
    }
}

export default new TimeConstraintsFormState();
