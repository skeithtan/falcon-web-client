import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { Route } from "react-router-dom";
import { IPageSpecification } from "../../../models/enums/page";
import FalconAppBar from "../FalconAppBar";

interface IPropsType {
    activePageSpecification: IPageSpecification;
}

@inject("authentication")
@observer
class AuthenticatedView extends React.Component<IPropsType> {
    public render() {
        const {
            activePageSpecification,
            activePageSpecification: { path, pathParameters = "", component },
        } = this.props;

        return (
            <Grid
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

                <Grid item>
                    <Route
                        path={"/" + path + pathParameters}
                        component={component!}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default AuthenticatedView;
