import List from "@material-ui/core/List";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Page from "../../../../../models/enums/page";
import { AuthenticationState } from "../../../../../store/authentication";
import PageItem from "../PageItem";

interface IPropsType extends RouteComponentProps<void> {
    authentication?: AuthenticationState;
    onClose: React.ReactEventHandler<{}>;
    activePage: Page;
}

@inject("authentication")
@observer
class PageList extends React.Component<IPropsType> {
    public renderList = (): React.ReactNode => {
        const { authentication, onClose, activePage } = this.props;
        const pageList = authentication!.currentUser!.getVisitablePages();
        return pageList.map((p: Page) => (
            <PageItem
                key={p}
                page={p}
                onClose={onClose}
                active={p === activePage}
            />
        ));
    };

    public render() {
        return <List>{this.renderList()}</List>;
    }
}

export default withRouter(PageList);
