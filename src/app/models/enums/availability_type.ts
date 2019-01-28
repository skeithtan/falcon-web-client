enum AvailabilityType {
    Available = "Available",
    Preferred = "Preferred",
    StudyLoad = "StudyLoad",
    OutsideLoad = "OutsideLoad",
    Other = "Other",
}

export const AvailabilityTypeReadable = new Map<AvailabilityType, string>([
    [AvailabilityType.Available, "I am available at this time slot"],
    [AvailabilityType.Preferred, "I prefer this time slot"],
    [AvailabilityType.StudyLoad, "I have study load at this time slot"],
    [AvailabilityType.OutsideLoad, "I have outside load at this time slot"],
    [AvailabilityType.Other, "Other (Specify)"],
]);

export default AvailabilityType;
