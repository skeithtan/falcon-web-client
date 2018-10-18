import { computed, observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
import FacultyLoadingFacultyMember from "../models/entities/faculty_loading_faculty_member";
import Term from "../models/entities/term";
import FacultyLoadingTab from "../models/enums/faculty_loading_tab";
import addTermFormState, {
    AddTermFormState,
} from "./faculty_loading/add_term_form";
import termListState, { TermListState } from "./faculty_loading/term_list";

export class FacultyLoadingState extends FetchableState {
    @observable
    public terms?: Map<number, Term> = undefined;

    @observable
    public activeTermId?: number = undefined;

    @observable
    public activeTab: FacultyLoadingTab = FacultyLoadingTab.Overview;

    @observable
    public addTermState: AddTermFormState = addTermFormState;

    @observable
    public termListState: TermListState = termListState;

    @observable
    public facultyMembers?: Map<
        number,
        FacultyLoadingFacultyMember
    > = undefined;

    @observable
    public activefacultyId?: number = undefined;

    @computed
    get activeTabIndex(): number {
        return Array.from(Object.values(FacultyLoadingTab)).indexOf(
            this.activeTab
        );
    }

    @computed
    get activeTerm() {
        if (!this.activeTermId || !this.terms) {
            return undefined;
        }

        return this.terms!.get(this.activeTermId);
    }

    @computed
    get activeFaculty() {
        if (!this.activefacultyId || !this.facultyMembers) {
            return undefined;
        }

        return this.facultyMembers!.get(this.activefacultyId);
    }
}

export default new FacultyLoadingState();
