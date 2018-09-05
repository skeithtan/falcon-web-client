import Grid from "@material-ui/core/Grid";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { FalconAppBar } from "../";
import { IPageSpecification } from "../../../models/enums/page";

interface IPropsType {
    pageSpecification: IPageSpecification;
}

@inject("authentication")
@observer
class AuthenticatedView extends React.Component<IPropsType> {
    public render() {
        const { pageSpecification } = this.props;

        return (
            <Grid
                container
                direction="column"
                alignItems="stretch"
                wrap="nowrap"
            >
                <Grid item>
                    <FalconAppBar pageSpecification={pageSpecification} />
                </Grid>

                <Grid item>{pageSpecification.component}</Grid>
            </Grid>
        );
    }
}

export default AuthenticatedView;
