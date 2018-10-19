import axios, { AxiosResponse } from "axios";
import FacultyLoadingFacultyMember from "../models/entities/faculty_loading_faculty_member";
import Term from "../models/entities/term";
import AddTermForm from "../models/forms/add_term_form";
import { handleAxiosError } from "../utils/handle_axios_error";

export default class FacultyLoadingService {
    public static async fetchAllTerms(): Promise<Term[]> {
        return axios
            .get("/terms")
            .then((response: AxiosResponse) => {
                return response.data.map((t: any) => new Term(t));
            })
            .catch(handleAxiosError);
    }

    public static async fetchTerm(termId: number): Promise<Term> {
        return axios
            .get(`/terms/${termId}`)
            .then((response: AxiosResponse) => new Term(response.data))
            .catch(handleAxiosError);
    }

    public static async addTerm(form: AddTermForm): Promise<Term> {
        return axios
            .post("/terms/", form)
            .then((response: AxiosResponse) => new Term(response.data))
            .catch(handleAxiosError);
    }

    public static async fetchAllFaculty(
        termId: number
    ): Promise<FacultyLoadingFacultyMember[]> {
        return axios
            .get(`/terms/${termId}/faculty-members`)
            .then((response: AxiosResponse) => {
                return response.data.map(
                    (flfm: any) => new FacultyLoadingFacultyMember(flfm)
                );
            })
            .catch(handleAxiosError);
    }
}
