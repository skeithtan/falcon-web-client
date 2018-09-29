import { observable } from "mobx";
import * as moment from "moment";
import FacultyMemberSubdocument from "../../interfaces/faculty_subdocuments";
import PresentationCategory from "../enums/presentation_category";
import PresentationMedium from "../enums/presentation_medium";

export default class Presentation extends FacultyMemberSubdocument {
    @observable
    public category: PresentationCategory;

    @observable
    public date: moment.Moment;

    @observable
    public sponsor: string;

    @observable
    public venue: string;

    @observable
    public conference: string;

    @observable
    public medium: PresentationMedium;

    @observable
    public daysDuration: number;

    constructor(p: any) {
        super(p);
        this.date = moment(p.date);
    }
}
