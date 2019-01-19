import { observable } from "mobx";
import IFetchable from "../../interfaces/fetchable";
import FormState from "../../interfaces/form_state";
import RecommendationFacultyMember from "../../models/entities/recommendation_faculty_member";
import FetchableStatus from "../../models/enums/fetchable_status";
import AssignFacultyDialog from "../../models/forms/assign_faculty_dialog";

export class AssignFacultyDialogState extends FormState<AssignFacultyDialog>
    implements IFetchable {
    @observable
    public fetchStatus: FetchableStatus = FetchableStatus.Unfetched;

    @observable
    public fetchError?: string = undefined;

    @observable
    public form: AssignFacultyDialog = new AssignFacultyDialog();

    @observable
    public recommendedFaculties?: RecommendationFacultyMember[] = undefined;

    public resetForm() {
        this.form = new AssignFacultyDialog();
    }
}

export default new AssignFacultyDialogState();
