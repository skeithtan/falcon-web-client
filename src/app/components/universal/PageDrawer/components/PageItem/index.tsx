import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import Page from "../../../../../models/enums/page";
import { PAGE_SPECIFICATION } from "../../../../../models/enums/page";

interface IPropsType extends RouteComponentProps<void> {
    page: Page;
    onClose: React.ReactEventHandler<{}>;
    active: boolean;
}

class PageItem extends React.Component<IPropsType> {
    public makeClickHandler = (path: string) => (
        event: React.SyntheticEvent
    ) => {
        const { history, onClose } = this.props;
        history.push(path);
        onClose(event);
    };

    public render() {
        const { page, active } = this.props;
        const { path, icon, name, description } = PAGE_SPECIFICATION[page];

        return (
            <ListItem
                onClick={this.makeClickHandler(path)}
                selected={active}
                button
            >
                <ListItemIcon>{React.createElement(icon!)}</ListItemIcon>
                <ListItemText primary={name} secondary={description!} />
            </ListItem>
        );
    }
}

export default withRouter(PageItem);
