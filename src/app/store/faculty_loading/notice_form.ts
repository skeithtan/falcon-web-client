import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import NoticeForm from "../../models/forms/notice_form";

export class NoticeFormState extends FormState<NoticeForm> {
    @observable
    public form: NoticeForm = new NoticeForm();

    public resetForm() {
        this.form = new NoticeForm();
    }
}

export default new NoticeFormState();
