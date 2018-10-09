import { IsEnum, IsNotEmpty, IsNumberString } from "class-validator";
import { observable } from "mobx";
import { AddSubdocumentForm } from "../../interfaces/add_subdocument_form";
import PresentationCategory from "../enums/presentation_category";
import PresentationMedium from "../enums/presentation_medium";

export default class AddPresentationForm extends AddSubdocumentForm {
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
}
