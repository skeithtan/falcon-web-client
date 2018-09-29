import { observable } from "mobx";
import * as moment from "moment";
import Entity from "../../interfaces/entity";
import ActivityType from "../enums/activity_type";
import FacultyMemberType from "../enums/faculty_member_type";
import Sex from "../enums/sex";
import Degree from "./degree";
import ExtensionWork from "./extension_work";
import FacultyUser from "./faculty_user";
import InstructionalMaterial from "./instructional_material";
import Presentation from "./presentation";
import Recognition from "./recognition";

export default class FacultyMember extends Entity {
    @observable
    public sex: Sex;

    @observable
    public type: FacultyMemberType;

    @observable
    public activity: ActivityType;

    @observable
    public birthDate: moment.Moment;

    @observable
    public fetchedRelations: boolean = false;

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

    @observable
    public user?: FacultyUser;

    get formattedPnuId() {
        return `T-${this.pnuId}`;
    }

    constructor(fm: any) {
        super(fm);
        this.birthDate = moment(fm.birthDate);
        this.user = new FacultyUser(fm.user);
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
        this.fetchedRelations = true;
    };
}
