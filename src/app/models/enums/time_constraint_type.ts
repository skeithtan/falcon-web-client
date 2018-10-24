enum TimeConstraintType {
    NotAvailable = "NotAvailable",
    Available = "Available",
    Preferred = "Preferred",
}

export const TimeConstraintTypeReadable = new Map<TimeConstraintType, string>([
    [TimeConstraintType.NotAvailable, "Not Available"],
    [TimeConstraintType.Available, "Available"],
    [TimeConstraintType.Preferred, "Preferred"],
]);

export default TimeConstraintType;
