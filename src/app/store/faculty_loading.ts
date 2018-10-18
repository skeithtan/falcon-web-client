import { computed, observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
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

    @computed
    get activeTerm() {
        if (!this.activeTermId || !this.terms) {
            return undefined;
        }

        return this.terms!.get(this.activeTermId);
    }
}

export default new FacultyLoadingState();
