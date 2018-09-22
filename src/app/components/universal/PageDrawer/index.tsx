import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import Page from "../../../models/enums/page";
import DrawerHead from "./components/DrawerHead";
import PageList from "./components/PageList";
import styles from "./styles";

interface IPropsType {
    open: boolean;
    activePage: Page;
    onClose: React.ReactEventHandler<{}>;
    classes: { [key: string]: string };
}

class PageDrawer extends React.Component<IPropsType> {
    public render() {
        const { open, onClose, activePage, classes } = this.props;
        return (
            <Drawer anchor="left" open={open} onClose={onClose}>
                <div className={classes.drawerContentContainer}>
                    <Grid container spacing={16} direction="column">
                        <Grid item>
                            <DrawerHead />
                        </Grid>
                        <Grid item>
                            <PageList
                                onClose={onClose}
                                activePage={activePage}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Drawer>
        );
    }
}

export default withStyles(styles)(PageDrawer);
