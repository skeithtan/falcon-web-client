import authentication, { AuthenticationState } from "./authentication";
import facultyLoading, { FacultyLoadingState } from "./faculty_loading";
import facultyProfiles, { FacultyProfilesState } from "./faculty_profiles";
import subjects, { SubjectsState } from "./subjects";

interface IRootStore {
    authentication: AuthenticationState;
    facultyProfiles: FacultyProfilesState;
    subjects: SubjectsState;
    facultyLoading: FacultyLoadingState;
}

const rootStore: IRootStore = {
    authentication,
    facultyProfiles,
    subjects,
    facultyLoading,
};

// Put rootStore as window variable when debugging
if (
    process &&
    process.env &&
    process.env.NODE_ENV &&
    process.env.NODE_ENV === "development"
) {
    // tslint:disable-next-line
    window["store"] = rootStore;
}

export default rootStore;
