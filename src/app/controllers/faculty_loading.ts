import FacultyLoadingTab from "../models/enums/faculty_loading_tab";
import FetchableStatus from "../models/enums/fetchable_status";
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

    public static setActiveTab(tab: FacultyLoadingTab) {
        facultyLoading.activeTab = tab;
    }
}
