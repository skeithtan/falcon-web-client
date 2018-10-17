import FacultyLoadingTab from "../models/enums/faculty_loading_tab";
import FetchableStatus from "../models/enums/fetchable_status";
import FormStatus from "../models/enums/form_status";
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
                facultyLoading.setStatus(FetchableStatus.Fetched);
                // set the first term as the active term
                this.setActiveTerm(facultyLoading.terms.get(0)!.id);
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
}
