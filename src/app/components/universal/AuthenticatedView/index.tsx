import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { Route } from "react-router-dom";
import IStyleClasses from "../../../interfaces/style_classes";
import { IPageSpecification } from "../../../models/enums/page";
import FalconAppBar from "../FalconAppBar";
import styles from "./styles";

interface IPropsType {
    activePageSpecification: IPageSpecification;
    classes: IStyleClasses;
}

@inject("authentication")
@observer
class AuthenticatedView extends React.Component<IPropsType> {
    public render() {
        const {
            activePageSpecification,
            activePageSpecification: { path, pathParameters = "", component },
            classes,
        } = this.props;

        return (
            <Grid
                className={classes.root}
                container
                direction="column"
                alignItems="stretch"
                wrap="nowrap"
            >
                <Grid item>
                    <FalconAppBar
                        activePageSpecification={activePageSpecification}
                    />
                </Grid>

                <Grid item className={classes.page} xs>
                    <Route
                        path={"/" + path + pathParameters}
                        component={component!}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(AuthenticatedView);
