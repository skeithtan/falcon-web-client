import FeedbackStatus from "../models/enums/feedback_status";

export default interface IClassScheduleFeedback {
    classId: number;
    feedback: FeedbackStatus;
}
