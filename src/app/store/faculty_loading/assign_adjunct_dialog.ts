import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AssignAdjunctDialog from "../../models/forms/assign_adjunct_dialog";

export class AssignAdjunctDialogState extends FormState<AssignAdjunctDialog> {
    @observable
    public form: AssignAdjunctDialog = new AssignAdjunctDialog();

    public resetForm() {
        this.form = new AssignAdjunctDialog();
    }
}

export default new AssignAdjunctDialogState();
