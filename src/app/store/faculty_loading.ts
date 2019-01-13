import { computed, observable } from "mobx";
import FetchableState from "../interfaces/fetchable_state";
import Term from "../models/entities/term";
import FacultyLoadingTab from "../models/enums/faculty_loading_tab";
import TermStatus from "../models/enums/term_status";
import addTermFormState, {
    AddTermFormState,
} from "./faculty_loading/add_term_form";
import classesTabState, {
    ClassesTabState,
} from "./faculty_loading/classes_tab";
import currentTermStatsState, {
    CurrentTermStatsState,
} from "./faculty_loading/current_term_stats";
import facultyTabState, {
    FacultyTabState,
} from "./faculty_loading/faculty_tab";
import printTermScheduleState, {
    PrintTermScheduleState,
} from "./faculty_loading/print_term_schedule";
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
    public printTermScheduleState: PrintTermScheduleState = printTermScheduleState;

    @observable
    public currentTermStatsState: CurrentTermStatsState = currentTermStatsState;

    @computed
    get activeTermStatusIndex(): number {
        return Array.from(Object.values(TermStatus)).indexOf(
            this.activeTerm!.status
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
