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
    get readableString(): string {
        const ordinalTermReadable = OrdinalTermReadable.get(this.term);
        return `${this.startYear} - ${this.startYear +
            1} ${ordinalTermReadable} Term`;
    }

    // things about class schedules and time constraints
    // computed things? maybe?
}
