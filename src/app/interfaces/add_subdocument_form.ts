import { ArrayNotEmpty } from "class-validator";
import { observable } from "mobx";
import Program from "../models/enums/program";

export abstract class AddSubdocumentForm {
    public facultyId: number;

    @ArrayNotEmpty({
        message: "Associated programs is required",
    })
    @observable
    public associatedPrograms: Program[] = [];
}
