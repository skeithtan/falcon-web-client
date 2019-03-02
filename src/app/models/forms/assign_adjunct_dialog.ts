import { IsNotEmpty } from "class-validator";
import { observable } from "mobx";

export default class AssignAdjunctDialog {
    @IsNotEmpty({
        message: "Name should not be empty",
    })
    @observable
    public adjunctName: string = "";
}
