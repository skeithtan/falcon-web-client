enum MeetingDays {
    MondayThursday = "MondayThursday",
    TuesdayFriday = "TuesdayFriday",
}

export const MeetingDaysReadable = new Map<MeetingDays, string>([
    [MeetingDays.MondayThursday, "Monday - Thursday"],
    [MeetingDays.TuesdayFriday, "Tuesday - Friday"],
]);

export default MeetingDays;
