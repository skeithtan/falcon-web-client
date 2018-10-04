import { IsEnum, IsNotEmpty, IsNumberString, Length } from "class-validator";
import { observable } from "mobx";
import DegreeLevel from "../enums/degree_level";

export default class AddDegreeForm {
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

    @IsNumberString({
        message: "Must be numbers",
    })
    @IsNotEmpty({
        message: "Completion year should not be empty",
    })
    @Length(4, 4, {
        message: "Must be 4 characters",
    })
    @observable
    public completionYear: string = "";
}
