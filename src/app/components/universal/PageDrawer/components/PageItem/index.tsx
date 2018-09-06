import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { IPageSpecification } from "../../../../../models/enums/page";

interface IPropsType extends RouteComponentProps<void> {
    pageSpecification: IPageSpecification;
    onClose: React.ReactEventHandler<{}>;
    active: boolean;
}

class PageItem extends React.Component<IPropsType> {
    public onClick = (event: React.SyntheticEvent) => {
        const {
            history,
            pageSpecification: { path },
            onClose,
        } = this.props;
        history.push(path);
        onClose(event);
    };

    public render() {
        const { pageSpecification: ps, active } = this.props;

        return (
            <ListItem onClick={this.onClick} selected={active} button>
                <ListItemIcon>{React.createElement(ps.icon!)}</ListItemIcon>
                <ListItemText primary={ps.name} />
            </ListItem>
        );
    }
}

export default withRouter(PageItem);
