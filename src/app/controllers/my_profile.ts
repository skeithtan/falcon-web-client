import FetchableStatus from "../models/enums/fetchable_status";
import FacultyMembersService from "../services/faculty_members";
import rootStore from "../store";

const { myProfile } = rootStore;

export default class MyProfileController {
    public static getCurrentFaculty() {
        myProfile.setStatus(FetchableStatus.Fetching);

        FacultyMembersService.fetchCurrentFaculty()
            .then(fm => {
                myProfile.profile = fm;
                myProfile.setStatus(FetchableStatus.Fetched);
            })
            .catch((e: Error) => {
                myProfile.setStatus(FetchableStatus.Error, e.message);
            });
    }
}
