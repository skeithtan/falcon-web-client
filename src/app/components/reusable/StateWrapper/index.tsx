import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import * as classNames from "classnames";
import { observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import FetchableStatus from "../../../models/enums/fetchable_status";
import styles from "./styles";

interface IPropsType {
    fetchableState: FetchableStatus;
    children: () => React.ReactNode;
    errorView?: React.ReactNode;
    loadingView?: React.ReactNode;
    classes: IStyleClasses;
    disableFlex?: boolean;
}

@observer
class StateWrapper extends React.Component<IPropsType> {
    public renderLoadingView() {
        return <CircularProgress size={80} />;
    }

    public render() {
        const {
            fetchableState,
            children,
            errorView,
            loadingView,
            classes,
            disableFlex,
        } = this.props;

        switch (fetchableState) {
            case FetchableStatus.Error:
                return (
                    <div className={classNames(classes.root, classes.flex)}>
                        {errorView ? errorView : <div>Error</div>}
                    </div>
                );
            case FetchableStatus.Fetching:
                return (
                    <div className={classNames(classes.root, classes.flex)}>
                        {loadingView ? loadingView : this.renderLoadingView()}
                    </div>
                );
            case FetchableStatus.Unfetched:
            case FetchableStatus.Partial:
                return <div />;
            default:
                return (
                    <div
                        className={classNames(classes.root, {
                            [classes.flex]: disableFlex,
                        })}
                    >
                        {children()}
                    </div>
                );
        }
    }
}

export default withStyles(styles)(StateWrapper);
