enum MeetingHours {
    AM_7_9 = "AM_7_9",
    AM_9_11 = "AM_9_11",
    AM_11_1 = "AM_11_1",
    PM_1_3 = "PM_1_3",
    PM_3_5 = "PM_3_5",
    PM_5_7 = "PM_5_7",
}

export const MeetingHoursReadable = new Map<MeetingHours, string>([
    [MeetingHours.AM_7_9, "AM_7_9"],
    [MeetingHours.AM_9_11, "AM_9_11"],
    [MeetingHours.AM_11_1, "AM_11_1"],
    [MeetingHours.PM_1_3, "PM_1_3"],
    [MeetingHours.PM_3_5, "PM_3_5"],
    [MeetingHours.PM_5_7, "PM_5_7"],
]);

export default MeetingHours;
