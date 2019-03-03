import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import DrawerFormHead from "./components/DrawerFormHead";
import styles from "./styles";

interface IPropsType {
    open: boolean;
    children: React.ReactNode;
    className?: string;
    onClose?: () => void;
    onOpen?: () => void;
    classes: IStyleClasses;
    formTitle: string;
    disablePadding?: boolean;
}

class DrawerForm extends React.Component<IPropsType> {
    public onClose = () => {
        const { onClose: propsOnClose } = this.props;
        if (propsOnClose) {
            propsOnClose();
        }
    };

    public render() {
        const {
            open,
            onOpen,
            children,
            className,
            classes,
            formTitle,
            disablePadding,
        } = this.props;
        return (
            <Drawer
                anchor="right"
                open={open}
                onEnter={onOpen}
                classes={{ paper: classNames(className, classes.root) }}
            >
                <Grid
                    className={classes.grid}
                    container
                    direction="column"
                    wrap="nowrap"
                >
                    <Grid item>
                        <DrawerFormHead
                            formTitle={formTitle}
                            onCloseButtonClick={this.onClose}
                        />
                    </Grid>
                    <Divider light />
                    <Grid item className={classes.childrenGridItem} xs={12}>
                        <div className={classes.childrenWrapper}>
                            {disablePadding ? (
                                children
                            ) : (
                                <CardContent>{children}</CardContent>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </Drawer>
        );
    }
}

export default withStyles(styles)(DrawerForm);
