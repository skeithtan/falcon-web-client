import axios, { AxiosResponse } from "axios";
import FacultyMember from "../models/entities/faculty_member";
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
}
