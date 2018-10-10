import axios, { AxiosResponse } from "axios";
import Presentation from "src/app/models/entities/presentation";
import AddPresentationForm from "src/app/models/forms/add_presentation_form";
import { handleAxiosError } from "src/app/utils/handle_axios_error";

export default class PresentationService {
    public static async add(form: AddPresentationForm) {
        return axios
            .post("/faculty-subdocuments/presentations", form)
            .then((response: AxiosResponse) => new Presentation(response.data))
            .catch(handleAxiosError);
    }

    public static async remove(id: number) {
        return axios.delete(`/faculty-subdocuments/presentations/${id}`).catch(handleAxiosError);
    }
}
