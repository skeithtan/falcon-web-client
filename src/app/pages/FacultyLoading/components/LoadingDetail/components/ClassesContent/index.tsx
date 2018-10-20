import Grid from "@material-ui/core/Grid";
import * as React from "react";
import ClassesAppBar from "./components/ClassesAppBar";

export default class ClassesContent extends React.Component {

    public render() {
        return (
            <Grid container direction="column">
                <Grid item>
                    <ClassesAppBar />
                </Grid>
            </Grid>
        );
    }
}
