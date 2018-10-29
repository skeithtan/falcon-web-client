import axios, { AxiosResponse } from "axios";
import FacultyProfile from "../models/entities/faculty_profile";
import AddFacultyMemberForm from "../models/forms/add_faculty_member_form";
import UpdateFacultyMemberForm from "../models/forms/update_faculty_member_form";
import { handleAxiosError } from "../utils/handle_axios_error";

export default class FacultyMembersService {
    public static async fetchAllFacultyMembers(): Promise<FacultyProfile[]> {
        return axios
            .get("/faculty-members")
            .then((response: AxiosResponse) => {
                return response.data.map((fm: any) => new FacultyProfile(fm));
            })
            .catch(handleAxiosError);
    }

    public static async fetchFacultyMember(
        facultyId: number
    ): Promise<FacultyProfile> {
        return axios
            .get(`/faculty-members/${facultyId}`)
            .then((response: AxiosResponse) => new FacultyProfile(response.data))
            .catch(handleAxiosError);
    }

    public static async addFacultyMember(
        form: AddFacultyMemberForm
    ): Promise<FacultyProfile> {
        return axios
            .post("/faculty-members/", form)
            .then((response: AxiosResponse) => new FacultyProfile(response.data))
            .catch(handleAxiosError);
    }

    public static async updateFacultyMember(
        form: UpdateFacultyMemberForm,
        activeId: number
    ): Promise<FacultyProfile> {
        return axios
            .put(`/faculty-members/${activeId}`, form)
            .then((response: AxiosResponse) => new FacultyProfile(response.data))
            .catch(handleAxiosError);
    }

    public static async fetchCurrentFaculty(): Promise<FacultyProfile> {
        return axios
            .get("/faculty-members/current")
            .then(
                (response: AxiosResponse<any>) =>
                    new FacultyProfile(response.data)
            )
            .catch(handleAxiosError);
    }
}
