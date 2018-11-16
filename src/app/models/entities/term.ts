import { computed, observable } from "mobx";
import { PartialEntity } from "../../interfaces/partial_entity";
import FetchableStatus from "../enums/fetchable_status";
import OrdinalTerm, { OrdinalTermReadable } from "../enums/ordinal_term";
import TermStatus from "../enums/term_status";
import ClassSchedule from "./class_schedule";
import Notice from "./notice";

export default class Term extends PartialEntity {
    @observable
    public startYear: number;

    @observable
    public term: OrdinalTerm;

    @observable
    public status: TermStatus;

    @observable
    public classSchedules?: ClassSchedule[];

    @observable
    public notices?: Notice[];

    constructor(plainObject: any) {
        super(plainObject);

        this.fetchStatus = plainObject.classSchedules
            ? FetchableStatus.Fetched
            : FetchableStatus.Partial;
    }

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
