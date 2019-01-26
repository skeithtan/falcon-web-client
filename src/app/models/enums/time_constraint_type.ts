enum TimeConstraintType {
    Available = "Available",
    Preferred = "Preferred",
    StudyLoad = "StudyLoad",
    OutsideLoad = "OutsideLoad",
    Other = "Other",
}

export const TimeConstraintTypeReadable = new Map<TimeConstraintType, string>([
    [TimeConstraintType.Available, "I am available at this time slot"],
    [TimeConstraintType.Preferred, "I prefer this time slot"],
    [TimeConstraintType.StudyLoad, "I have study load at this time slot"],
    [TimeConstraintType.OutsideLoad, "I have outsie load at this time slot"],
    [TimeConstraintType.Other, "Other (Specify)"],
]);

export default TimeConstraintType;
