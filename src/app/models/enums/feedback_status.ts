enum FeedbackStatus {
    Accepted = "Accepted",
    Rejected = "Rejected",
    Pending = "Pending",
}

export const FeedbackStatusReadable = new Map<FeedbackStatus, string>([
    [FeedbackStatus.Accepted, "Accepted"],
    [FeedbackStatus.Rejected, "Rejected"],
    [FeedbackStatus.Pending, "Pending"],
]);

export default FeedbackStatus;