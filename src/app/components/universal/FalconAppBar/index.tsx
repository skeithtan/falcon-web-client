import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { IPageSpecification } from "../../../models/enums/page";
import { AppBarTitle, AppBarUtilities } from "./components";

interface IPropsType {
    pageSpecification: IPageSpecification;
}

class FalconAppBar extends React.Component<IPropsType> {
    public state = {
        drawerOpen: false,
    };

    public render() {
        const {
            pageSpecification: { name, appBarAccessory: accessory },
        } = this.props;

        return (
            <AppBar position="static">
                <Toolbar disableGutters>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        <Grid item>
                            <AppBarTitle pageTitle={name} />
                        </Grid>

                        {accessory && <Grid item>{accessory}</Grid>}

                        <Grid item>
                            <AppBarUtilities />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default FalconAppBar;
