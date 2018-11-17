import { IsNotEmpty } from "class-validator";
import { observable } from "mobx";

export default class NoticeForm {
    @IsNotEmpty({
        message: "Your message cannot be empty",
    })
    @observable
    public message: string = "";
}
