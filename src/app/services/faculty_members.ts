import axios, { AxiosResponse } from "axios";
import FacultyMember from "../models/entities/faculty_member";
import { handleAxiosError } from "../utils/handle_axios_error";

export const fetchAllFacultyMembers = (): Promise<FacultyMember[]> =>
    axios
        .get("/faculty-members")
        .then((response: AxiosResponse) => {
            return response.data.map((fm: any) => new FacultyMember(fm));
        })
        .catch(handleAxiosError);
