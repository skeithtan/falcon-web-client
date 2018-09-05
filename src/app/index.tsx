import { inject, observer } from "mobx-react";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
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
    public renderSignInPage() {
        return <SignInPage />;
    }

    public handlePath = () => {
        const {
            match: { params },
            history,
            authentication,
        } = this.props;

        // Non signed-in users will not be entertained
        if (!authentication!.currentUser) {
            return;
        }

        const page = params.page;

        // If no selected page, redirect to default page
        if (!page) {
            const defaultPage = authentication!.currentUser!.getDefaultPage();
            const defaultPagePath = PAGE_SPECIFICATION[defaultPage].path;
            history.push(defaultPagePath);
            return;
        }

        const pageSpecification = Object.values(PAGE_SPECIFICATION).find(
            (ps: IPageSpecification) => ps.path === page
        );

        // If page could not be found, go to 404 page
        const notFound = !pageSpecification;
        const notAllowed =
            pageSpecification &&
            !authentication!
                .currentUser!.getVisitablePages()
                .includes(pageSpecification.page);

        if (notFound || notAllowed) {
            history.push(PAGE_SPECIFICATION[Page.NotFound].path);
            return;
        }
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
