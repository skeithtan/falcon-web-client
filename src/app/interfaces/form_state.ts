import { validateSync } from "class-validator";
import { computed, observable } from "mobx";
import FormStatus from "../models/enums/form_status";
import { toValidationErrors } from "../utils/to_validation_errors";

export default abstract class FormState<F> {
    @observable
    public isShowing: boolean = false;

    @observable
    public status: FormStatus = FormStatus.Editing;

    public abstract form: F;

    @computed
    public get validationErrors() {
        const errors = validateSync(this.form);
        return toValidationErrors(errors);
    }

    @computed
    public get canSubmit() {
        return Object.keys(this.validationErrors).length === 0;
    }
}
