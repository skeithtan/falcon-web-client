import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseButton from "@material-ui/icons/Close";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
import IStyleClasses from "src/app/interfaces/style_classes";
import styles from "./styles";

const Transition = (props: any) => <Slide direction="up" {...props} />;

interface IPropsType {
    title: string;
    open: boolean;
    children: React.ReactNode;
    classes: IStyleClasses;
}

class PrintPreviewDialog extends React.Component<IPropsType> {
    public onClose = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleProfilePrintPreview(shouldShow);
    };

    public render() {
        const { title, open, children, classes } = this.props;
        return (
            <Dialog
                fullScreen
                open={open}
                onClose={this.onClose(false)}
                TransitionComponent={Transition}
            >
                <AppBar color="default" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <IconButton
                            onClick={this.onClose(false)}
                            color="inherit"
                        >
                            <CloseButton />
                        </IconButton>
                        <Typography variant="h5" color="inherit">
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <React.Fragment>{children}</React.Fragment>
            </Dialog>
        );
    }
}

export default withStyles(styles)(PrintPreviewDialog);
