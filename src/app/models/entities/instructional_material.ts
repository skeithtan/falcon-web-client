import { observable } from "mobx";
import FacultyMemberSubdocument from "../../interfaces/faculty_subdocuments";
import InstructionalMaterialAudience from "../enums/instructional_material_audience";
import InstructionalMaterialMedium from "../enums/instructional_material_medium";

export default class InstructionalMaterial extends FacultyMemberSubdocument {
    @observable
    public medium: InstructionalMaterialMedium;

    @observable
    public audience: InstructionalMaterialAudience;

    @observable
    public usageYear: string;

    @observable
    public level: number;

    constructor(im: any) {
        super();
        Object.assign(this, im);
    }
}
