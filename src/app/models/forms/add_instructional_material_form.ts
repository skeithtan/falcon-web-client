import {
    ArrayNotEmpty,
    IsArray,
    IsEnum,
    IsNotEmpty,
    IsNumberString,
    Length,
} from "class-validator";
import { observable } from "mobx";
import InstructionalMaterialAudience from "../enums/instructional_material_audience";
import InstructionalMaterialMedium from "../enums/instructional_material_medium";
import Program from "../enums/program";

export default class AddInstructionalMaterialForm {
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

    @IsNotEmpty({
        message: "Material level is required",
    })
    @observable
    public level: string = "";

    @IsArray()
    @ArrayNotEmpty({
        message: "Associated programs is required",
    })
    @observable
    public associatedPrograms: Program[] = [];
}
