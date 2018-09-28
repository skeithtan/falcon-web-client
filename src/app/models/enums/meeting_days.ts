enum MeetingDays {
    MondayThursday = "MondayThursday",
    TuesdayFriday = "TuesdayFriday",
}

export const MeetingDaysReadable = new Map<MeetingDays, string>([
    [MeetingDays.MondayThursday, "MondayThursday"],
    [MeetingDays.TuesdayFriday, "TuesdayFriday"],
]);

export default MeetingDays;
