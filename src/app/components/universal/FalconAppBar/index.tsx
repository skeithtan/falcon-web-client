import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { IPageSpecification } from "../../../models/enums/page";
import { AppBarTitle, AppBarUtilities } from "./components";
import styles from "./styles";

interface IPropsType {
    activePageSpecification: IPageSpecification;
    classes: { [key: string]: string };
}

class FalconAppBar extends React.Component<IPropsType> {
    public state = {
        drawerOpen: false,
    };

    public render() {
        const {
            activePageSpecification: {
                name,
                appBarAccessory: accessory,
                page: activePage,
            },
            classes,
        } = this.props;

        return (
            <AppBar position="static">
                <Toolbar className={classes.toolbar} disableGutters>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        <Grid item>
                            <AppBarTitle
                                pageTitle={name}
                                activePage={activePage}
                            />
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

export default withStyles(styles)(FalconAppBar);
