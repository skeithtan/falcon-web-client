import { observable } from "mobx";
import { PartialEntity } from "../../interfaces/partial_entity";
import Program from "../enums/program";
import SubjectCategory from "../enums/subject_category";

export default class Subject extends PartialEntity {
    @observable
    public code: string;
    
    @observable
    public name: string;
    
    @observable
    public description: string;
    
    @observable
    public category: SubjectCategory;
    
    @observable
    public program: Program;
}
