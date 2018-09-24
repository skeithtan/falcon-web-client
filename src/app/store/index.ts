import authentication, { AuthenticationState } from "./authentication";
import facultyProfiles, { FacultyProfilesState } from "./faculty_profiles";

interface IRootStore {
    authentication: AuthenticationState;
    facultyProfiles: FacultyProfilesState;
}

const rootStore: IRootStore = {
    authentication,
    facultyProfiles,
};

export default rootStore;
