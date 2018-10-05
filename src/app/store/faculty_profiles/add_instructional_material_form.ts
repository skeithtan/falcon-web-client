import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import AddInstructionalMaterialForm from "../../models/forms/add_instructional_material_form";

export class AddInstructionalMaterialFormState extends FormState<
    AddInstructionalMaterialForm
> {
    @observable
    public form: AddInstructionalMaterialForm = new AddInstructionalMaterialForm();

    public resetForm() {
        this.form = new AddInstructionalMaterialForm();
    }
}

export default new AddInstructionalMaterialFormState();
