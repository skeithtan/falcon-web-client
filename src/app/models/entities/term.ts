import { computed, observable } from "mobx";
import Entity from "../../interfaces/entity";
import OrdinalTerm, { OrdinalTermReadable } from "../enums/ordinal_term";
import TermStatus from "../enums/term_status";

export default class Term extends Entity {
    @observable
    public startYear: number;

    @observable
    public term: OrdinalTerm;

    @observable
    public status: TermStatus;

    @computed
    get readable(): string {
        return `${this.yearRangeReadable} ${this.ordinalTermReadable}`;
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
