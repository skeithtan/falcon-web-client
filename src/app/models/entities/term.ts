import { observable } from "mobx";
import Entity from "../../interfaces/entity";
import OrdinalTerm from "../enums/ordinal_term";
import TermStatus from "../enums/term_status";

export default class Term extends Entity {
    @observable
    public startYear: number;

    @observable
    public term: OrdinalTerm;

    @observable
    public status: TermStatus;

    // things about class schedules and time constraints
    // computed things? maybe?
}
