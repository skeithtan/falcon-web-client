import { ArrayNotEmpty } from "class-validator";
import { observable } from "mobx";
import Program from "../models/enums/program";

export abstract class AddSubdocumentForm {
    @ArrayNotEmpty({
        message: "Associated programs is required",
    })
    @observable
    public associatedPrograms: Program[] = [];

    public facultyId: number;
}
