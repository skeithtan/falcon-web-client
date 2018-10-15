import { IsEnum, IsNotEmpty } from "class-validator";
import { observable } from "mobx";
import Subject from "../entities/subject";
import Program from "../enums/program";
import SubjectCategory from "../enums/subject_category";

export default class UpdateSubjectForm {
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

    public prefillForm(s: Subject) {
        this.code = s.code;
        this.name = s.name;
        this.description = s.description;
        this.category = s.category;
        this.program = s.program;
    }
}
