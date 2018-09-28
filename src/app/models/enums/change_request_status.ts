enum ChangeRequestStatus {
    Pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected",
}

export const ChangeRequestStatusReadable = new Map<ChangeRequestStatus, string>([
    [ChangeRequestStatus.Pending, "Pending"],
    [ChangeRequestStatus.Approved, "Approved"],
    [ChangeRequestStatus.Rejected, "Rejected"],
]);

export default ChangeRequestStatus;
