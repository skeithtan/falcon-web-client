import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddRecognitionForm from "../../models/forms/add_recognition_form";

export class AddRecognitionFormState extends FormState<AddRecognitionForm> {
    @observable
    public form: AddRecognitionForm = new AddRecognitionForm();

    public resetForm() {
        this.form = new AddRecognitionForm();
    }
}

export default new AddRecognitionFormState();
