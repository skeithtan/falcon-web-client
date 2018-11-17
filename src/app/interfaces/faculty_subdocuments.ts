import { observable } from "mobx";
import Program from "../models/enums/program";
import Entity from "./entity";

export default abstract class FacultyMemberSubdocument extends Entity {
    @observable
    public title: string;

    @observable
    public associatedPrograms: Program[];

    @observable
    public ongoing: boolean;
}