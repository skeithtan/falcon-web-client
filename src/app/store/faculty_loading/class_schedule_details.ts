import { observable } from "mobx";
import FormState from "../../interfaces/form_state";
import ManualAssignFacultyForm from "../../models/forms/manual_assign_faculty_form";

export class ClassScheduleDetailsState extends FormState<ManualAssignFacultyForm> {
    @observable
    public form: ManualAssignFacultyForm = new ManualAssignFacultyForm();

    public resetForm() {
        this.form = new ManualAssignFacultyForm();
    }
}

export default new ClassScheduleDetailsState();
