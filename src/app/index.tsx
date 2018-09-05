import { inject, observer } from "mobx-react";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { User } from "./models/entities";
import Page, {
    IPageSpecification,
    PAGE_SPECIFICATION,
} from "./models/enums/page";
import SignInPage from "./pages/SignIn";
import { AuthenticationState } from "./store/authentication";

interface IRouteParameters {
    page?: string;
}

interface IPropsType extends RouteComponentProps<IRouteParameters> {
    authentication?: AuthenticationState;
}

@inject("authentication")
@observer
class App extends React.Component<IPropsType> {
    public renderSignInPage = () => {
        return <SignInPage />;
    };

    // Given current path and current user, return the current pageSpecification
    public getPageSpecificationFromPath = (
        pagePath: string | undefined,
        user: User
    ): IPageSpecification => {
        // If no selected page, redirect to default page
        if (!pagePath) {
            const defaultPage = user.getDefaultPage();
            return PAGE_SPECIFICATION[defaultPage];
        }

        const pageSpecification = Object.values(PAGE_SPECIFICATION).find(
            (ps: IPageSpecification) => ps.path === pagePath
        );

        // If page could not be found or page is not for the user type, go to 404 page
        const notFound = !pageSpecification;
        const notAllowed =
            pageSpecification &&
            !user.getVisitablePages().includes(pageSpecification.page);

        if (notFound || notAllowed) {
            return PAGE_SPECIFICATION[Page.NotFound];
        }

        return pageSpecification!;
    };

    public handlePath = () => {
        const {
            match: { params },
            history,
            authentication,
        } = this.props;

        const currentUser = authentication!.currentUser;

        // Non signed-in users will not be entertained
        if (!currentUser) {
            return;
        }

        const pagePath = params.page;
        const pageSpecification = this.getPageSpecificationFromPath(
            pagePath,
            currentUser
        );

        if (pageSpecification.path === pagePath) {
            return;
        }

        history.push(pageSpecification.path);
    };

    //
    // ─── Lifecycle Functions ───────────────────────────────────────────────────────────────────────────
    //

    public componentDidMount() {
        this.handlePath();
    }

    public componentDidUpdate(prevProps: IPropsType) {
        this.handlePath();
    }

    public render() {
        const { authentication } = this.props;

        if (authentication!.currentUser) {
            return <div />; // TODO
        }

        return this.renderSignInPage();
    }
}

export default withRouter<IPropsType>(App);
