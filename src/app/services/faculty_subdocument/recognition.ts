import axios, { AxiosResponse } from "axios";
import Recognition from "src/app/models/entities/recognition";
import AddRecognitionForm from "src/app/models/forms/add_recognition_form";
import { handleAxiosError } from "src/app/utils/handle_axios_error";

export default class RecognitionService {
    public static async add(form: AddRecognitionForm) {
        return axios
            .post("/faculty-subdocuments/recognitions", form)
            .then((response: AxiosResponse) => new Recognition(response.data))
            .catch(handleAxiosError);
    }

    public static async remove(id: number) {
        return axios
            .delete(`/faculty-subdocuments/recognitions/${id}`)
            .catch(handleAxiosError);
    }
}
