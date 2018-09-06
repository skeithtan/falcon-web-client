import { observable } from "mobx";
import { Page, UserType } from "../enums";

export default class User {
    @observable
    public firstName: string;

    @observable
    public lastName: string;

    @observable
    public email: string;

    @observable
    public authorization: UserType;

    @observable
    public passwordIsTemporary: boolean;

    public getDefaultPage(): Page {
        switch (this.authorization) {
            case UserType.AssociateDean:
            case UserType.Dean:
                return Page.FacultyLoading;
            case UserType.Clerk:
                return Page.FacultyProfiles;
            case UserType.Faculty:
                return Page.MySchedule;
        }
    }

    public getVisitablePages(): Page[] {
        switch (this.authorization) {
            case UserType.AssociateDean:
            case UserType.Dean:
            case UserType.Clerk:
                return [
                    Page.FacultyLoading,
                    Page.FacultyProfiles,
                    Page.Subjects,
                    Page.Users,
                ];
            case UserType.Faculty:
                return [Page.MyProfile, Page.MySchedule];
        }
    }
}
