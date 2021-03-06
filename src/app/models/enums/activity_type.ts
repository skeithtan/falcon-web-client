enum ActivityType {
    Active = "Active",
    OnLeave = "OnLeave",
    Terminated = "Terminated",
}

export const ActivityTypeReadable = new Map<ActivityType, string>([
    [ActivityType.Active, "Active"],
    [ActivityType.OnLeave, "On Leave"],
    [ActivityType.Terminated, "Terminated"],
]);

export default ActivityType;
