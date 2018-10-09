import axios, { AxiosResponse } from "axios";
import ExtensionWork from "src/app/models/entities/extension_work";
import AddExtensionWorkForm from "src/app/models/forms/add_extension_work_form";
import { handleAxiosError } from "src/app/utils/handle_axios_error";

export default class ExtensionWorkService {
    public static async add(form: AddExtensionWorkForm) {
        return axios
            .post("/extension-works", form)
            .then((response: AxiosResponse) => new ExtensionWork(response.data))
            .catch(handleAxiosError);
    }

    public static async remove(id: number) {
        return axios.delete(`/extension-works/${id}`).catch(handleAxiosError);
    }
}
