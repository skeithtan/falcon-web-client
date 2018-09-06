import List from "@material-ui/core/List";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { PageItem } from "../";
import { Page } from "../../../../../models/enums";
import {
    IPageSpecification,
    PAGE_SPECIFICATION,
} from "../../../../../models/enums/page";
import { AuthenticationState } from "../../../../../store/authentication";

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
        return pageList
            .map((p: Page) => PAGE_SPECIFICATION[p])
            .map((ps: IPageSpecification) => (
                <PageItem
                    key={ps.name}
                    pageSpecification={ps}
                    onClose={onClose}
                    active={ps.page === activePage}
                />
            ));
    };

    public render() {
        return <List>{this.renderList()}</List>;
    }
}

export default withRouter(PageList);
