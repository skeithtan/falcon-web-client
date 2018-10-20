import { computed, observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
import Term from "../models/entities/term";
import FacultyLoadingTab from "../models/enums/faculty_loading_tab";
import addClassFormState, {
    AddClassFormState,
} from "./faculty_loading/add_class_form";
import addTermFormState, {
    AddTermFormState,
} from "./faculty_loading/add_term_form";
import classesTabState, {
    ClassesTabState,
} from "./faculty_loading/classes_tab";
import facultyTabState, {
    FacultyTabState,
} from "./faculty_loading/faculty_tab";
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
    public facultyTabState: FacultyTabState = facultyTabState;

    @observable
    public classesTabState: ClassesTabState = classesTabState;

    @observable
    public addClassState: AddClassFormState = addClassFormState;

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

        return this.terms!.get(this.activeTermId)!;
    }
}

export default new FacultyLoadingState();
