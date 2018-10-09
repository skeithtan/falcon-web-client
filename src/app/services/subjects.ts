import axios, { AxiosResponse } from "axios";
import Subject from "../models/entities/subject";
import AddSubjectForm from "../models/forms/add_subject_form";
import { handleAxiosError } from "../utils/handle_axios_error";

export default class SubjectsService {
    public static async fetchAllSubjects(): Promise<Subject[]> {
        return axios
            .get("/subjects")
            .then((response: AxiosResponse) => {
                return response.data.map((s: any) => new Subject(s));
            })
            .catch(handleAxiosError);
    }

    public static async fetchSubject(subjectId: number): Promise<Subject> {
        return axios
            .get(`/subjects/${subjectId}`)
            .then((response: AxiosResponse) => {
                return new Subject(response.data);
            })
            .catch(handleAxiosError);
    }

    public static async addSubject(form: AddSubjectForm): Promise<Subject> {
        return axios
            .post("/subjects/", form)
            .then((response: AxiosResponse) => {
                return new Subject(response.data);
            })
            .catch(handleAxiosError);
    }
}
