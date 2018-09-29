import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import FetchableStatus from "../../../models/enums/fetchable_status";
import styles from "./styles";

interface IPropsType {
    fetchableState: FetchableStatus;
    renderFetched: () => React.ReactNode;
    errorView?: React.ReactNode;
    loadingView?: React.ReactNode;
    classes: IStyleClasses;
}

class StateWrapper extends React.Component<IPropsType> {
    public renderLoadingView() {
        return <CircularProgress size={80} />;
    }

    public render() {
        const {
            fetchableState,
            renderFetched,
            errorView,
            loadingView,
            classes,
        } = this.props;

        let child: React.ReactNode = <div />;

        switch (fetchableState) {
            case FetchableStatus.Error:
                child = errorView ? errorView : <div>Error</div>;
                break;
            case FetchableStatus.Fetching:
                child = loadingView ? loadingView : this.renderLoadingView();
                break;
            case FetchableStatus.Fetched:
                child = renderFetched();
        }

        return <div className={classes.root}>{child}</div>;
    }
}

export default withStyles(styles)(StateWrapper);
