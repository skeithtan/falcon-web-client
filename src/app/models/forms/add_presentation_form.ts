import {
    ArrayNotEmpty,
    IsArray,
    IsEnum,
    IsNotEmpty,
    IsNumberString,
} from "class-validator";
import { observable } from "mobx";
import PresentationCategory from "../enums/presentation_category";
import PresentationMedium from "../enums/presentation_medium";
import Program from "../enums/program";

export default class AddPresentationForm {
    @IsNotEmpty({
        message: "Title should not be empty",
    })
    @observable
    public title: string = "";

    @IsEnum(PresentationCategory)
    @IsNotEmpty({
        message: "Presentation category is required",
    })
    @observable
    public category: string = "";

    @IsNotEmpty({
        message: "Date is required",
    })
    @observable
    public date: string = "";

    @IsNotEmpty({
        message: "Sponsor should not be empty",
    })
    @observable
    public sponsor: string = "";

    @IsNotEmpty({
        message: "Venue should not be empty",
    })
    @observable
    public venue: string = "";

    @IsNotEmpty({
        message: "Conference should not be empty",
    })
    @observable
    public conference: string = "";

    @IsEnum(PresentationMedium)
    @IsNotEmpty({
        message: "Presentation medium is required",
    })
    @observable
    public medium: string = "";

    @IsNumberString({
        message: "Must be a number",
    })
    @observable
    public daysDuration: string = "";

    @IsArray()
    @ArrayNotEmpty({
        message: "Associated programs is required",
    })
    @observable
    public associatedPrograms: Program[] = [];
}
