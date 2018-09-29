import { validateSync } from "class-validator";
import { computed, observable } from "mobx";
import FormStatus from "../models/enums/form_status";
import { toValidationErrors } from "../utils/to_validation_errors";

export default abstract class FormState<F> {
    @observable
    public isShowing: boolean = false;

    @observable
    public status: FormStatus = FormStatus.Editing;

    @observable
    public submissionError?: string = undefined;

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

    public setStatus(newStatus: FormStatus, error?: string) {
        this.submissionError = undefined;
        this.status = newStatus;

        if (newStatus === FormStatus.Error && error) {
            this.submissionError = error;
        }
    }

    public abstract resetForm(): void;

    public resetAndClose() {
        this.status = FormStatus.Editing;
        this.isShowing = false;
        this.submissionError = undefined;
        this.resetForm();
    }
}
