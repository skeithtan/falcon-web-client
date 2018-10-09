import { IsEnum, IsNotEmpty } from "class-validator";
import { observable } from "mobx";
import Program from "../enums/program";
import SubjectCategory from "../enums/subject_category";

export default class AddSubjectForm {
    @IsNotEmpty({
        message: "Code should not be empty",
    })
    @observable
    public code: string = "";

    @IsNotEmpty({
        message: "Name should not be empty",
    })
    @observable
    public name: string = "";

    @IsNotEmpty({
        message: "Description should not be empty",
    })
    @observable
    public description: string = "";

    @IsEnum(SubjectCategory)
    @IsNotEmpty({
        message: "Category is required",
    })
    @observable
    public category: string = "";

    @IsEnum(Program)
    @IsNotEmpty({
        message: "Program is required",
    })
    @observable
    public program: string = "";
}
