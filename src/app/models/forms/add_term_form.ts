import { IsEnum, IsNotEmpty, IsNumberString, Length } from "class-validator";
import { observable } from "mobx";
import OrdinalTerm from "../enums/ordinal_term";

export default class AddTermForm {
    @IsNumberString({
        message: "Must be numbers",
    })
    @Length(4, 4, {
        message: "Must be 4 characters",
    })
    @IsNotEmpty({
        message: "Start year must not be empty",
    })
    @observable
    public startYear: string = "";

    @IsEnum(OrdinalTerm)
    @IsNotEmpty({
        message: "Term is required",
    })
    @observable
    public term: string = "";
}
