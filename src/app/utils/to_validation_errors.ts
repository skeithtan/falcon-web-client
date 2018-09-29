import { ValidationError } from "class-validator";
import * as _ from "lodash";
import IValidationErrors from "../interfaces/validation_errors";

export const toValidationErrors = (errors: ValidationError[]) => {
    const grouped = _.groupBy(errors, "property");
    const validationErrors: IValidationErrors = {};
    Object.keys(grouped).forEach(key => {
        const item: ValidationError = grouped[key][0];
        validationErrors[key] = Object.values(item.constraints);
    });
    return validationErrors;
};
