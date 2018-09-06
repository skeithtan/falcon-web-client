import { SvgIconProps } from "@material-ui/core/SvgIcon";
import SubjectsIcon from "@material-ui/icons/Book";
import FacultyLoadingIcons from "@material-ui/icons/CalendarToday";
import FacultyProfilesIcon from "@material-ui/icons/Contacts";
import UsersIcon from "@material-ui/icons/SupervisedUserCircle";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { FacultyProfilesPage } from "../../pages";

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
    component?: React.ComponentClass<{} & RouteComponentProps<{}>>;
    name: string;
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
        pathParameters: "/:facultyId?",
    },
    [Page.Subjects]: {
        page: Page.Subjects,
        path: "subjects",
        icon: SubjectsIcon,
        component: undefined,
        name: "Subjects",
        pathParameters: "/:subjectId?",
    },
    [Page.FacultyLoading]: {
        page: Page.FacultyLoading,
        path: "faculty-loading",
        icon: FacultyLoadingIcons,
        component: undefined,
        name: "Faculty Loading",
        pathParameters: "/:termId?/:meetingDays?",
    },
    [Page.Users]: {
        page: Page.Users,
        path: "users",
        icon: UsersIcon,
        component: undefined,
        name: "Users",
    },
    [Page.MyProfile]: {
        page: Page.MyProfile,
        path: "my-profile",
        icon: FacultyProfilesIcon,
        component: undefined,
        name: "My Profile",
    },
    [Page.MySchedule]: {
        page: Page.MySchedule,
        path: "my-schedule",
        icon: SubjectsIcon,
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
