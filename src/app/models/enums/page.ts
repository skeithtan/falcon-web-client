import { Component } from "react";

enum Page {
    //
    // ─── Administrative ───────────────────────────────────────────────────────────────────────────
    //
    FacultyProfiles,
    Subjects,
    FacultyLoading,
    Users,

    //
    // ─── Faculty Members ───────────────────────────────────────────────────────────────────────────
    //
    MyProfile,
    MySchedule,

    //
    // ─── Universal ───────────────────────────────────────────────────────────────────────────
    //
    NotFound,
}

export interface IPageSpecification {
    page: Page;
    path: string;
    component?: Component;
    name: string;
    pathParameters?: string;
}

export const PAGE_SPECIFICATION: { [key: number]: IPageSpecification } = {
    [Page.FacultyProfiles]: {
        page: Page.FacultyProfiles,
        path: "faculty-profiles",
        component: undefined,
        name: "Faculty Profiles",
        pathParameters: "/:facultyId?/:activeTab?",
    },
    [Page.Subjects]: {
        page: Page.Subjects,
        path: "subjects",
        component: undefined,
        name: "Subjects",
        pathParameters: "/:subjectId?",
    },
    [Page.FacultyLoading]: {
        page: Page.FacultyLoading,
        path: "faculty-loading",
        component: undefined,
        name: "Faculty Loading",
        pathParameters: "/:termId?/:meetingDays?",
    },
    [Page.Users]: {
        page: Page.Users,
        path: "users",
        component: undefined,
        name: "Users",
    },
    [Page.MyProfile]: {
        page: Page.MyProfile,
        path: "my-profile",
        component: undefined,
        name: "My Profile",
    },
    [Page.MySchedule]: {
        page: Page.MySchedule,
        path: "my-schedule",
        component: undefined,
        name: "My Schedue",
        pathParameters: "/:termId?",
    },
    [Page.NotFound]: {
        page: Page.NotFound,
        path: "404",
        component: undefined,
        name: "Page Not Found",
    },
};

export default Page;
