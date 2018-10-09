import axios, { AxiosResponse } from "axios";
import Degree from "../models/entities/degree";
import ExtensionWork from "../models/entities/extension_work";
import InstructionalMaterial from "../models/entities/instructional_material";
import Presentation from "../models/entities/presentation";
import Recognition from "../models/entities/recognition";
import AddDegreeForm from "../models/forms/add_degree_form";
import AddExtensionWorkForm from "../models/forms/add_extension_work_form";
import AddInstructionalMaterialForm from "../models/forms/add_instructional_material_form";
import AddPresentationForm from "../models/forms/add_presentation_form";
import AddRecognitionForm from "../models/forms/add_recognition_form";
import { handleAxiosError } from "../utils/handle_axios_error";

export class DegreeService {
    public static async add(form: AddDegreeForm) {
        return axios
            .post("/degrees", form)
            .then((response: AxiosResponse) => new Degree(response.data))
            .catch(handleAxiosError);
    }

    public static async remove(id: number) {
        return axios.delete(`/degrees/${id}`).catch(handleAxiosError);
    }
}

export class RecognitionService {
    public static async add(form: AddRecognitionForm) {
        return axios
            .post("/recognitions", form)
            .then((response: AxiosResponse) => new Recognition(response.data))
            .catch(handleAxiosError);
    }

    public static async remove(id: number) {
        return axios.delete(`/recognitions/${id}`).catch(handleAxiosError);
    }
}

export class PresentationsService {
    public static async add(form: AddPresentationForm) {
        return axios
            .post("/presentations", form)
            .then((response: AxiosResponse) => new Presentation(response.data))
            .catch(handleAxiosError);
    }

    public static async remove(id: number) {
        return axios.delete(`/presentations/${id}`).catch(handleAxiosError);
    }
}

export class InstructionalMaterialService {
    public static async add(form: AddInstructionalMaterialForm) {
        return axios
            .post("/instructional-materials", form)
            .then(
                (response: AxiosResponse) =>
                    new InstructionalMaterial(response.data)
            )
            .catch(handleAxiosError);
    }

    public static async remove(id: number) {
        return axios
            .delete(`/instructional-materials/${id}`)
            .catch(handleAxiosError);
    }
}

export class ExtensionWorksService {
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
