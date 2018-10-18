import { observable } from "mobx";
import Entity from "../../interfaces/entity";
import FeedbackStatus from "../enums/feedback_status";

export default class Feedback extends Entity {
    @observable
    public status: FeedbackStatus;
}
