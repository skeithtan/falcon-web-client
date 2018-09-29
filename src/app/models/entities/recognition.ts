import { observable } from "mobx";
import * as moment from "moment";
import FacultyMemberSubdocument from "../../interfaces/faculty_subdocuments";
import RecognitionBasis from "../enums/recognition_basis";

export default class Recognition extends FacultyMemberSubdocument {
    @observable
    public basis: RecognitionBasis;

    @observable
    public date: moment.Moment;

    @observable
    public sponsor: string;

    constructor(r: any) {
        super(r);
        this.date = moment(r.date);
    }
}
