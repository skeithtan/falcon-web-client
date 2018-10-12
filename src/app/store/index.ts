import authentication, { AuthenticationState } from "./authentication";
import facultyProfiles, { FacultyProfilesState } from "./faculty_profiles";
import subjects, { SubjectsState } from "./subjects";

interface IRootStore {
    authentication: AuthenticationState;
    facultyProfiles: FacultyProfilesState;
    subjects: SubjectsState;
}

const rootStore: IRootStore = {
    authentication,
    facultyProfiles,
    subjects,
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
