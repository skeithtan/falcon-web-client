import axios, { AxiosResponse } from "axios";
import ClassSchedule from "../models/entities/class_schedule";
import FacultyLoadingFacultyMember from "../models/entities/faculty_loading_faculty_member";
import Notice from "../models/entities/notice";
import RecommendationFacultyMember from "../models/entities/recommendation_faculty_member";
import Term from "../models/entities/term";
import TimeConstraint from "../models/entities/time_constraint";
import FeedbackStatus from "../models/enums/feedback_status";
import AddClassesForm from "../models/forms/add_classes_form";
import AddTermForm from "../models/forms/add_term_form";
import AssignAdjunctDialog from "../models/forms/assign_adjunct_dialog";
import NoticeForm from "../models/forms/notice_form";
import TimeConstraintsForm from "../models/forms/time_constraints_form";
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

    public static async fetchCurrentFaculty(
        termId: number
    ): Promise<FacultyLoadingFacultyMember> {
        return axios
            .get(`/terms/${termId}/my-schedules`)
            .then(
                (response: AxiosResponse) =>
                    new FacultyLoadingFacultyMember(response.data)
            )
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

    public static async addClassSchedules(
        termId: number,
        form: AddClassesForm
    ): Promise<ClassSchedule[]> {
        return axios
            .post(`/terms/${termId}/class-schedules`, form)
            .then((response: AxiosResponse) =>
                response.data.map((cs: any) => new ClassSchedule(cs))
            )
            .catch(handleAxiosError);
    }

    public static async removeClassSchedule(classId: number) {
        return axios
            .delete(`/class-schedules/${classId}`)
            .catch(handleAxiosError);
    }

    public static async submitTimeConstraints(
        termId: number,
        form: TimeConstraintsForm
    ): Promise<TimeConstraint[]> {
        return axios
            .post(`/terms/${termId}/my-schedules/time-constraints`, form)
            .then((response: AxiosResponse) => {
                return response.data.map((tc: any) => new TimeConstraint(tc));
            })
            .catch(handleAxiosError);
    }

    public static async submitFeedback(
        termId: number,
        form: { [key: number]: FeedbackStatus }
    ): Promise<FacultyLoadingFacultyMember> {
        console.log(form);
        return axios
            .post(`/terms/${termId}/my-schedules/feedback`, form)
            .then((response: AxiosResponse) => {
                return new FacultyLoadingFacultyMember(response.data);
            })
            .catch(handleAxiosError);
    }

    public static async advance(): Promise<Term> {
        return axios
            .post("/terms/advance")
            .then((response: AxiosResponse) => new Term(response.data))
            .catch(handleAxiosError);
    }

    public static async regress(): Promise<Term> {
        return axios
            .post("/terms/regress")
            .then((response: AxiosResponse) => new Term(response.data))
            .catch(handleAxiosError);
    }

    public static async autoAssignFaculty(): Promise<ClassSchedule[]> {
        return axios
            .post("/terms/auto-assign")
            .then((response: AxiosResponse) => {
                return response.data.map((cs: any) => new ClassSchedule(cs));
            })
            .catch(handleAxiosError);
    }

    public static async getAllFaculties(
        termId: number,
        csId: number
    ): Promise<RecommendationFacultyMember[]> {
        return axios
            .get(`/terms/${termId}/class-schedules/${csId}/`)
            .then((response: AxiosResponse) => {
                return response.data.map(
                    (fm: any) => new RecommendationFacultyMember(fm)
                );
            })
            .catch(handleAxiosError);
    }

    public static async assignFacultyToClass(
        termId: number,
        csId: number,
        facultyId: number
    ): Promise<ClassSchedule> {
        return axios
            .post(
                `/terms/${termId}/class-schedules/${csId}/set-faculty/${facultyId}`
            )
            .then((response: AxiosResponse) => {
                return new ClassSchedule(response.data);
            })
            .catch(handleAxiosError);
    }

    public static async submitNotice(
        termId: number,
        form: NoticeForm
    ): Promise<Notice> {
        return axios
            .post(`/terms/${termId}/my-schedules/notice`, form)
            .then((response: AxiosResponse) => {
                return new Notice(response.data);
            })
            .catch(handleAxiosError);
    }

    public static async removeNotice(termId: number, noticeId: number) {
        return axios
            .delete(`/terms/${termId}/notices/${noticeId}`)
            .catch(handleAxiosError);
    }

    public static async getCurrentStats() {
        return axios
            .get("/terms/current-stats")
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch(handleAxiosError);
    }

    public static async getUnderloadedLastTerm() {
        return axios
            .get("/terms/underloaded-last-term")
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch(handleAxiosError);
    }

    public static async getYear(year: number) {
        return axios
            .get(`/terms/year/${year}`)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch(handleAxiosError);
    }

    public static async assignAdjunct(
        termId: number,
        classScheduleId: number,
        form: AssignAdjunctDialog
    ): Promise<ClassSchedule> {
        return axios
            .post(
                `/terms/${termId}/class-schedules/${classScheduleId}/set-adjunct`,
                form
            )
            .then((response: AxiosResponse) => {
                return new ClassSchedule(response.data);
            })
            .catch(handleAxiosError);
    }

    public static async getAdjunctNames(): Promise<string[]> {
        return axios
            .get("/faculty-members/adjunct")
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch(handleAxiosError);
    }

    public static async getCourses(): Promise<string[]> {
        return axios
            .get("/subjects/courses")
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch(handleAxiosError);
    }
}
