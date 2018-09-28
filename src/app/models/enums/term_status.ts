enum TermStatus {
    Initializing = "Initializing",
    Scheduling = "Scheduling",
    FeedbackGathering = "FeedbackGathering",
    Published = "Published",
    Archived = "Archived",
}

export const TermStatusReadable = new Map<TermStatus, string>([
    [TermStatus.Initializing, "Initializing"],
    [TermStatus.Scheduling, "Scheduling"],
    [TermStatus.FeedbackGathering, "Feedback Gathering"],
    [TermStatus.Published, "Published"],
    [TermStatus.Archived, "Archived"],
]);

export default TermStatus;
