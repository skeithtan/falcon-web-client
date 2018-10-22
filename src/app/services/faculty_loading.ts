import axios, { AxiosResponse } from "axios";
import ClassSchedule from "../models/entities/class_schedule";
import FacultyLoadingFacultyMember from "../models/entities/faculty_loading_faculty_member";
import Term from "../models/entities/term";
import AddClassForm from "../models/forms/add_class_form";
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

    public static async fetchAllClasses(
        termId: number
    ): Promise<ClassSchedule[]> {
        return axios
            .get(`/terms/${termId}/class-schedules`)
            .then((response: AxiosResponse) => {
                return response.data.map((cs: any) => new ClassSchedule(cs));
            })
            .catch(handleAxiosError);
    }

    public static async addClassSchedule(
        termId: number,
        form: AddClassForm
    ): Promise<ClassSchedule> {
        return axios
            .post(`/terms/${termId}/class-schedules`, form)
            .then((response: AxiosResponse) => new ClassSchedule(response.data))
            .catch(handleAxiosError);
    }
}
