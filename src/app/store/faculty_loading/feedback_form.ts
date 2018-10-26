import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import FeedbackForm from "../../models/forms/feedback_form";

export class FeedbackFormState extends FormState<FeedbackForm> {
    @observable
    public form: FeedbackForm = new FeedbackForm();

    public resetForm() {
        this.form = new FeedbackForm();
    }
}

export default new FeedbackFormState();
