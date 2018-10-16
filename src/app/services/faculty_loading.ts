import axios, { AxiosResponse } from "axios";
import Term from "../models/entities/term";
import AddTermForm from "../models/forms/add_term_form";
import { handleAxiosError } from "../utils/handle_axios_error";

export default class FacultyLoadingService {
    public static async fetchAllTerms(): Promise<Term[]> {
        return axios
            .get("/faculty-loading")
            .then((response: AxiosResponse) => {
                return response.data.map((t: any) => new Term(t));
            })
            .catch(handleAxiosError);
    }

    public static async fetchTerm(termId: number): Promise<Term> {
        return axios
            .get(`/faculty-loading/${termId}`)
            .then((response: AxiosResponse) => new Term(response.data))
            .catch(handleAxiosError);
    }

    public static async addTerm(form: AddTermForm): Promise<Term> {
        return axios
            .post("/faculty-loading/", form)
            .then((response: AxiosResponse) => new Term(response.data))
            .catch(handleAxiosError);
    }
}
