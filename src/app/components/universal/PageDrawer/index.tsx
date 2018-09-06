import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { Page } from "../../../models/enums";
import { DrawerHead, PageList } from "./components";

interface IPropsType {
    open: boolean;
    activePage: Page;
    onClose: React.ReactEventHandler<{}>;
}

class PageDrawer extends React.Component<IPropsType> {
    public render() {
        const { open, onClose, activePage } = this.props;
        return (
            <Drawer anchor="left" open={open} onClose={onClose}>
                <div>
                    <Grid container spacing={16} direction="column">
                        <Grid item>
                            <DrawerHead />
                        </Grid>
                        <Grid item>
                            <PageList onClose={onClose} activePage={activePage} />
                        </Grid>
                    </Grid>
                </div>
            </Drawer>
        );
    }
}

export default PageDrawer;
