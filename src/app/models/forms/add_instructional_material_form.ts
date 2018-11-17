import {
    IsEnum,
    IsNotEmpty,
    IsNumberString,
    Length,
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
} from "class-validator";
import { observable } from "mobx";
import { AddSubdocumentForm } from "../../interfaces/add_subdocument_form";
import InstructionalMaterialAudience from "../enums/instructional_material_audience";
import InstructionalMaterialMedium from "../enums/instructional_material_medium";

export default class AddInstructionalMaterialForm extends AddSubdocumentForm {
    @IsNotEmpty({
        message: "Title should not be empty",
    })
    @observable
    public title: string = "";

    @IsEnum(InstructionalMaterialMedium)
    @IsNotEmpty({
        message: "Material medium is required",
    })
    @observable
    public medium: string = "";

    @IsEnum(InstructionalMaterialAudience)
    @IsNotEmpty({
        message: "Material audience is required",
    })
    @observable
    public audience: string = "";

    @IsNumberString({
        message: "Must be numbers",
    })
    @Length(4, 4, {
        message: "Must be 4 characters",
    })
    @IsNotEmpty({
        message: "Usage year should not be empty",
    })
    @observable
    public usageYear: string = "";

    @IsValidLevel({
        message: "Material level is required",
    })
    @observable
    public level: string = "";

    @observable
    public ongoing: boolean = false;
}

function IsValidLevel(validationOptions?: ValidationOptions) {
    return (form: AddInstructionalMaterialForm, propertyName: string) =>
        registerDecorator({
            name: "IsValidLevel",
            target: form.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value: string, args: ValidationArguments) {
                    const {
                        audience,
                    } = args.object as AddInstructionalMaterialForm;
                    return audience === InstructionalMaterialAudience.Student
                        ? value.length !== 0
                        : true;
                },
            },
        });
}
