import { inject, observer } from "mobx-react";
import * as React from "react";
import { FetchableState } from "./models/enums";
import SignInPage from "./pages/SignIn";
import { AuthenticationState } from "./store/authentication";

interface IPropsType {
    authentication?: AuthenticationState;
}

@inject("authentication")
@observer
export default class App extends React.Component<IPropsType> {
    public renderSignInPage() {
        return <SignInPage />;
    }

    public render() {
        const { authentication } = this.props;

        if (authentication!.fetchState === FetchableState.Fetched) {
            return <div />; // TODO
        }

        return this.renderSignInPage();
    }
}
