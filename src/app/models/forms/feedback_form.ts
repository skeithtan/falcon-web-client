import { observable } from "mobx";
import FacultyClassSchedule from "../entities/faculty_class_schedule";
import FeedbackStatus from "../enums/feedback_status";

export default class FeedbackForm {
    @observable
    public classScheduleFeedbacks: Map<
        FacultyClassSchedule,
        FeedbackStatus
    > = new Map();
}
