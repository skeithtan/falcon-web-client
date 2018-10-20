enum MeetingHours {
    AM_7_9 = "AM_7_9",
    AM_9_11 = "AM_9_11",
    AM_11_1 = "AM_11_1",
    PM_1_3 = "PM_1_3",
    PM_3_5 = "PM_3_5",
    PM_5_7 = "PM_5_7",
}

export const MeetingHoursReadable = new Map<MeetingHours, string>([
    [MeetingHours.AM_7_9, "7 AM - 9 AM"],
    [MeetingHours.AM_9_11, "9 AM - 11 AM"],
    [MeetingHours.AM_11_1, "11 AM - 1 PM"],
    [MeetingHours.PM_1_3, "1 PM - 3 PM"],
    [MeetingHours.PM_3_5, "3 PM - 5 PM"],
    [MeetingHours.PM_5_7, "5 PM - 7 PM"],
]);

export default MeetingHours;
