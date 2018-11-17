import { IsEnum, IsNotEmpty } from "class-validator";
import { observable } from "mobx";
import { AddSubdocumentForm } from "../../interfaces/add_subdocument_form";
import RecognitionBasis from "../enums/recognition_basis";

export default class AddRecognitionForm extends AddSubdocumentForm {
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

    public ongoing: boolean = false;
}
