import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../store/faculty_loading";
import TermTabs from "./components/TermTabs";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class LoadingBar extends React.Component<IPropsType> {
    public toggleTermList = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleTermList(shouldShow);
    };

    public render() {
        const { facultyLoading, classes } = this.props;
        const { activeTerm } = facultyLoading!;
        return (
            <AppBar color="default" position="static">
                <Toolbar className={classes.toolbar}>
                    <Grid
                        container
                        direction="row"
                        wrap="nowrap"
                        alignItems="center"
                        justify="space-between"
                    >
                        <Grid item>
                            <Button
                                size="small"
                                color="primary"
                                onClick={this.toggleTermList(true)}
                            >
                                {activeTerm!.readableString}{" "}
                                <ArrowDropDownIcon />
                            </Button>
                        </Grid>

                        <Grid item>
                            <TermTabs />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(LoadingBar);
