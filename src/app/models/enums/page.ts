import { SvgIconProps } from "@material-ui/core/SvgIcon";
import SubjectsIcon from "@material-ui/icons/Book";
import FacultyLoadingIcons from "@material-ui/icons/CalendarToday";
import FacultyProfilesIcon from "@material-ui/icons/Contacts";
import UsersIcon from "@material-ui/icons/SupervisedUserCircle";
import * as React from "react";
import FacultyProfilesPage from "../../pages/FacultyProfiles";

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

export default Page;

export interface IPageSpecification {
    page: Page;
    path: string;
    icon?: React.ComponentType<SvgIconProps>;
    component?: React.ComponentType;
    name: string;
    description?: string;
    pathParameters?: string;
    appBarAccessory?: React.Component;
}

export const PAGE_SPECIFICATION: { [key: number]: IPageSpecification } = {
    [Page.FacultyProfiles]: {
        page: Page.FacultyProfiles,
        path: "faculty-profiles",
        icon: FacultyProfilesIcon,
        component: FacultyProfilesPage,
        name: "Faculty Profiles",
        description:
            "View faculty members and their profile information",
        pathParameters: "/:facultyId?",
    },
    [Page.Subjects]: {
        page: Page.Subjects,
        path: "subjects",
        icon: SubjectsIcon,
        component: undefined,
        name: "Subjects",
        description: "View subjects, description, and expert faculties",
        pathParameters: "/:subjectId?",
    },
    [Page.FacultyLoading]: {
        page: Page.FacultyLoading,
        path: "faculty-loading",
        icon: FacultyLoadingIcons,
        component: undefined,
        name: "Faculty Loading",
        description: "Create schedules, assign faculty members to classes",
        pathParameters: "/:termId?/:meetingDays?",
    },
    [Page.Users]: {
        page: Page.Users,
        path: "users",
        icon: UsersIcon,
        component: undefined,
        name: "Users",
        description: "Set up and configure Falcon users",
    },
    [Page.MyProfile]: {
        page: Page.MyProfile,
        path: "my-profile",
        icon: FacultyProfilesIcon,
        component: undefined,
        name: "My Profile",
        description: "View profile, expert subjects, and create add requests",
    },
    [Page.MySchedule]: {
        page: Page.MySchedule,
        path: "my-schedule",
        icon: SubjectsIcon,
        component: undefined,
        name: "My Schedue",
        description:
            "View term schedules, submit time availability and feedback",
        pathParameters: "/:termId?",
    },
    [Page.NotFound]: {
        page: Page.NotFound,
        path: "404",
        component: undefined,
        name: "Page Not Found",
    },
};
