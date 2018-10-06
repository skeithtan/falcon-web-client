import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty } from "class-validator";
import { observable } from "mobx";
import Program from "../enums/program";
import RecognitionBasis from "../enums/recognition_basis";

export default class AddRecognitionForm {
    @IsNotEmpty({
        message: "Title should not be empty",
    })
    @observable
    public title: string = "";

    @IsEnum(RecognitionBasis)
    @IsNotEmpty({
        message: "Recognition basis is required",
    })
    @observable
    public basis: string = "";

    @IsNotEmpty({
        message: "Recognition date is required",
    })
    @observable
    public date: string = "";

    @IsNotEmpty({
        message: "Sponsor should not be empty",
    })
    @observable
    public sponsor: string = "";

    @IsArray()
    @ArrayNotEmpty({
        message: "Associated programs is required",
    })
    @observable
    public associatedPrograms: Program[] = [];
}
