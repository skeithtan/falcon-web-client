import { ArrayNotEmpty, IsArray, IsNotEmpty } from "class-validator";
import { observable } from "mobx";
import { AddSubdocumentForm } from "../../interfaces/add_subdocument_form";
import ExtensionWorkRole from "../enums/extension_work_role";

export default class AddExtensionWorkForm extends AddSubdocumentForm {
    @IsNotEmpty({
        message: "Title should not be empty",
    })
    @observable
    public title: string = "";

    @IsArray()
    @ArrayNotEmpty({
        message: "Extension work roles is required",
    })
    @observable
    public roles: ExtensionWorkRole[] = [];

    @IsNotEmpty({
        message: "Venue should not be empty",
    })
    @observable
    public venue: string = "";

    @observable
    public ongoing: boolean = false;
}
