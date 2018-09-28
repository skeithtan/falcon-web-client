import { observable } from "mobx";
import Page from "../enums/page";
import UserType from "../enums/user_type";

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

    constructor(plainObject: any) {
        Object.assign(this, plainObject);
    }

    public getDefaultPage(): Page {
        switch (this.authorization) {
            case UserType.AssociateDean:
            case UserType.Dean:
                return Page.FacultyLoading;
            case UserType.Clerk:
                return Page.FacultyProfiles;
            case UserType.Faculty:
                return Page.MySchedule;
            default:
                throw new Error(`Unknown authorization ${this.authorization}`);
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
            default:
                throw new Error(`Unknown authorization ${this.authorization}`);
        }
    }
}
