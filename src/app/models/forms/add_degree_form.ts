import {
    IsEnum,
    IsNotEmpty,
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    Validator,
} from "class-validator";
import { observable } from "mobx";
import { AddSubdocumentForm } from "../../interfaces/add_subdocument_form";
import DegreeLevel from "../enums/degree_level";

const validator = new Validator();

function validateCompletionYear(validationOptions?: ValidationOptions) {
    return (object: object, propertyName: string) => {
        registerDecorator({
            name: "isLongerThan",
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return value === undefined
                        ? true
                        : validator.length(value, 4, 4) &&
                              validator.isNumberString(value);
                },
            },
        });
    };
}

export default class AddDegreeForm extends AddSubdocumentForm {
    @IsNotEmpty({
        message: "Title should not be empty",
    })
    @observable
    public title: string = "";

    @IsEnum(DegreeLevel)
    @IsNotEmpty({
        message: "Degree level is required",
    })
    @observable
    public level: string = "";

    @validateCompletionYear()
    @observable
    public completionYear?: string = "";

    @observable
    public ongoing: boolean = false;
}
