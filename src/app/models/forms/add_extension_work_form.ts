import { ArrayNotEmpty, IsArray, IsNotEmpty } from "class-validator";
import { observable } from "mobx";
import ExtensionWorkRole from "../enums/extension_work_role";
import Program from "../enums/program";

export default class AddExtensionWorkForm {
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

    @IsArray()
    @ArrayNotEmpty({
        message: "Associated programs is required",
    })
    @observable
    public associatedPrograms: Program[] = [];
}
