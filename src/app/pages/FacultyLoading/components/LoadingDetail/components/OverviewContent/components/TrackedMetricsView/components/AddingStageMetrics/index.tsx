import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

export default class AddingStageMetrics extends React.Component {
    public render() {
        return (
            <Grid container direction="column" wrap="nowrap" spacing={24}>
                <Grid item>
                    <Typography variant="h6">
                        Faculty Time Constraints Gathered
                    </Typography>
                </Grid>
                <Grid item>
                    {/* TODO: Value prop for linear progress */}
                    <LinearProgress variant="determinate" />
                </Grid>
                <Grid item>
                    <Typography variant="overline">
                        {/* TODO: Count of people left */}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}
