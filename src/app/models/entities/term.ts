import { computed, observable } from "mobx";
import Entity from "../../interfaces/entity";
import OrdinalTerm, { OrdinalTermReadable } from "../enums/ordinal_term";
import TermStatus from "../enums/term_status";
import ClassSchedule from "./class_schedule";
import Notice from "./notice";

export default class Term extends Entity {
    @observable
    public startYear: number;

    @observable
    public term: OrdinalTerm;

    @observable
    public status: TermStatus;

    @observable
    public classSchedules: ClassSchedule[];

    @observable
    public notices: Notice[];

    @computed
    get readable(): string {
        return `${this.ordinalTermReadable} ${this.yearRangeReadable}`;
    }

    @computed
    get ordinalTermReadable(): string {
        return `${OrdinalTermReadable.get(this.term)!} Term`;
    }

    @computed
    get yearRangeReadable(): string {
        return `${this.startYear} - ${this.startYear + 1}`;
    }
}
