import axios, { AxiosResponse } from "axios";
import InstructionalMaterial from "src/app/models/entities/instructional_material";
import AddInstructionalMaterialForm from "src/app/models/forms/add_instructional_material_form";
import { handleAxiosError } from "src/app/utils/handle_axios_error";

export default class InstructionalMaterialService {
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
