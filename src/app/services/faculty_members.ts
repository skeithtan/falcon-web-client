import axios, { AxiosResponse } from "axios";
import FacultyMember from "../models/entities/faculty_member";
import AddFacultyMemberForm from "../models/forms/add_faculty_member_form";
import { handleAxiosError } from "../utils/handle_axios_error";

export default class FacultyMembersService {
    public static async fetchAllFacultyMembers(): Promise<FacultyMember[]> {
        return axios
            .get("/faculty-members")
            .then((response: AxiosResponse) => {
                return response.data.map((fm: any) => new FacultyMember(fm));
            })
            .catch(handleAxiosError);
    }

    public static async fetchFacultyMember(
        facultyId: number
    ): Promise<FacultyMember> {
        return axios
            .get(`/faculty-members/${facultyId}`)
            .then((response: AxiosResponse) => {
                const fm = new FacultyMember(response.data);
                return fm;
            })
            .catch(handleAxiosError);
    }

    public static async addFacultyMember(
        form: AddFacultyMemberForm
    ): Promise<FacultyMember> {
        return axios
            .post("/faculty-members/", form)
            .then((response: AxiosResponse) => {
                return new FacultyMember(response.data);
            })
            .catch(handleAxiosError);
    }
}
