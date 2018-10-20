import FacultyLoadingTab from "../models/enums/faculty_loading_tab";
import FetchableStatus from "../models/enums/fetchable_status";
import FormStatus from "../models/enums/form_status";
import MeetingDays from "../models/enums/meeting_days";
import FacultyLoadingService from "../services/faculty_loading";
import rootStore from "../store";
import { groupById } from "../utils/group_by_id";

const { facultyLoading } = rootStore;

export default class FacultyLoadingController {
    public static getAllTerms() {
        facultyLoading.setStatus(FetchableStatus.Fetching);

        FacultyLoadingService.fetchAllTerms()
            .then(t => {
                facultyLoading.terms = groupById(t);

                if (t.length > 0) {
                    // Find Max ID (Likely most recent) and make it active
                    facultyLoading.activeTermId = Math.max(
                        ...Array.from(facultyLoading.terms.keys())
                    );
                }

                facultyLoading.setStatus(FetchableStatus.Fetched);
            })
            .catch((e: Error) => {
                facultyLoading.setStatus(FetchableStatus.Error, e);
            });
    }

    public static toggleAddTermForm(shouldShow: boolean) {
        facultyLoading.addTermState.isShowing = shouldShow;

        if (!shouldShow) {
            facultyLoading.addTermState.resetAndClose();
        }
    }

    public static submitAddTerm() {
        const { addTermState: formState } = facultyLoading;
        const form = formState.form;
        formState.setStatus(FormStatus.Submitting);

        FacultyLoadingService.addTerm(form)
            .then(t => {
                facultyLoading.terms!.set(t.id, t);
                formState.resetAndClose();
                this.setActiveTerm(t.id);
            })
            .catch(e => {
                formState.setStatus(FormStatus.Error, e);
            });
    }

    public static setActiveTerm(id: number) {
        facultyLoading.activeTermId = id;
        const term = facultyLoading.activeTerm!;

        FacultyLoadingService.fetchTerm(term.id)
            .then(t => {
                facultyLoading.terms!.set(t.id, t);
            })
            .catch((e: Error) =>
                facultyLoading.setStatus(FetchableStatus.Error, e)
            );
    }

    public static setActiveTab(tab: FacultyLoadingTab) {
        facultyLoading.activeTab = tab;
    }

    public static toggleTermList(shouldShow: boolean) {
        facultyLoading.termListState.isShowing = shouldShow;
    }

    public static getAllFaculty() {
        const state = facultyLoading.facultyTabState;
        state.setStatus(FetchableStatus.Fetching);

        FacultyLoadingService.fetchAllFaculty(facultyLoading.activeTermId!)
            .then(fm => {
                state.facultyMembers = fm;
                state.setStatus(FetchableStatus.Fetched);
            })
            .catch((e: Error) => {
                state.setStatus(FetchableStatus.Error, e);
            });
    }

    public static setActiveFaculty(facultyId: number) {
        const state = facultyLoading.facultyTabState;
        state.activefacultyId = facultyId;
    }

    public static setActiveClassesTab(tab: MeetingDays) {
        const state = facultyLoading.classesTabState;
        state.activeTab = tab;
    }

    public static showOnlyUnassigned(shouldShow: boolean) {
        const state = facultyLoading.classesTabState;
        state.showOnlyUnassigned = shouldShow;
    }
}
