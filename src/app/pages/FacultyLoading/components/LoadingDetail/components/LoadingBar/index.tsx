import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import FacultyLoadingController from "../../../../../../controllers/faculty_loading";
import AddTermButton from "./components/AddTermButton";
import TermSelect from "./components/TermSelect";
import TermTabs from "./components/TermTabs";

export default class LoadingBar extends React.Component {
    public toggleAddTermForm = (shouldShow: boolean) => () => {
        FacultyLoadingController.toggleAddTermForm(shouldShow);
    };

    public render() {
        return (
            <AppBar>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        wrap="nowrap"
                        alignItems="stretch"
                    >
                        <Grid item>
                            <TermSelect />
                        </Grid>
                        <Grid item>
                            <AddTermButton
                                onAddClick={this.toggleAddTermForm(true)}
                            />
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
