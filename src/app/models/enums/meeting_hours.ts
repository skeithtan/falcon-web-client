enum MeetingHours {
    AM_7_9 = "AM_7_9",
    AM_9_11 = "AM_9_11",
    AM_11_1 = "AM_11_1",
    PM_1_3 = "PM_1_3",
    PM_3_5 = "PM_3_5",
    PM_5_7 = "PM_5_7",
}

export const MeetingHoursReadable = new Map<MeetingHours, string>([
    [MeetingHours.AM_7_9, "7 - 9"],
    [MeetingHours.AM_9_11, "9 - 11"],
    [MeetingHours.AM_11_1, "11 - 1"],
    [MeetingHours.PM_1_3, "1 - 3"],
    [MeetingHours.PM_3_5, "3 - 5"],
    [MeetingHours.PM_5_7, "5 - 7"],
]);

export default MeetingHours;
