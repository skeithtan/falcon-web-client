import { observable } from "mobx";
import Program from "../models/enums/program";

export default abstract class FacultyMemberSubdocument {
    @observable
    public id: number;

    @observable
    public title: string;

    @observable
    public associatedPrograms: Program[];
}