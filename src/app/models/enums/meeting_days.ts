enum MeetingDays {
    MondayThursday = "MondayThursday",
    TuesdayFriday = "TuesdayFriday",
}

export const MeetingDaysReadable = new Map<MeetingDays, string>([
    [MeetingDays.MondayThursday, "Mondays and Thursdays"],
    [MeetingDays.TuesdayFriday, "Tuesdays and Fridays"],
]);

export default MeetingDays;
