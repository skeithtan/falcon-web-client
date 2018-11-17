import axios, { AxiosResponse } from "axios";
import Degree from "src/app/models/entities/degree";
import AddDegreeForm from "src/app/models/forms/add_degree_form";
import { handleAxiosError } from "src/app/utils/handle_axios_error";

export default class DegreeService {
    public static async add(form: AddDegreeForm) {
        return axios
            .post("/faculty-subdocuments/degrees", form)
            .then((response: AxiosResponse) => new Degree(response.data))
            .catch(handleAxiosError);
    }

    public static async remove(id: number) {
        return axios
            .delete(`/faculty-subdocuments/degrees/${id}`)
            .catch(handleAxiosError);
    }

    public static async toggleOngoing(degreeId: number): Promise<Degree> {
        return axios
            .put(`/faculty-subdocuments/degrees/${degreeId}/toggle-ongoing`)
            .then((response: AxiosResponse) => new Degree(response.data))
            .catch(handleAxiosError);
    }
}
