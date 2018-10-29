import { computed, observable } from "mobx";
import * as moment from "moment";
import { PartialEntity } from "../../interfaces/partial_entity";
import ActivityType from "../enums/activity_type";
import FacultyMemberType from "../enums/faculty_member_type";
import FetchableStatus from "../enums/fetchable_status";
import Sex from "../enums/sex";
import Degree from "./degree";
import ExtensionWork from "./extension_work";
import InstructionalMaterial from "./instructional_material";
import Presentation from "./presentation";
import Recognition from "./recognition";

export default class FacultyProfile extends PartialEntity {
    @observable
    public firstName: string;

    @observable
    public lastName: string;

    @observable
    public email: string;

    @observable
    public sex: Sex;

    @observable
    public type: FacultyMemberType;

    @observable
    public activity: ActivityType;

    @observable
    public birthDate: moment.Moment;

    @observable
    public presentations?: Presentation[];

    @observable
    public recognitions?: Recognition[];

    @observable
    public pnuId: string;

    @observable
    public instructionalMaterials?: InstructionalMaterial[];

    @observable
    public extensionWorks?: ExtensionWork[];

    @observable
    public degrees?: Degree[];

    @computed
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    @computed
    get formattedPnuId() {
        return `T-${this.pnuId}`;
    }

    public taughtSubjects?: { [key: string]: number };

    constructor(fm: any) {
        super(fm);
        this.birthDate = moment(fm.birthDate);

        const hasRelations = Boolean(this.presentations);
        if (hasRelations) {
            this.populateRelations(fm);
        }
    }

    public populateRelations = (fm: any) => {
        this.presentations = fm.presentations.map(
            (p: any) => new Presentation(p)
        );
        this.recognitions = fm.recognitions.map((r: any) => new Recognition(r));
        this.instructionalMaterials = fm.instructionalMaterials.map(
            (im: any) => new InstructionalMaterial(im)
        );
        this.extensionWorks = fm.extensionWorks.map(
            (ew: any) => new ExtensionWork(ew)
        );
        this.degrees = fm.degrees.map((d: any) => new Degree(d));
        this.fetchStatus = FetchableStatus.Fetched;
    };
}
