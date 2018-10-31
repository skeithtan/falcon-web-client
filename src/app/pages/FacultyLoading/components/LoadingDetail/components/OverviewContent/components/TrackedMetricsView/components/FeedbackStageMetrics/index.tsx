import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

export default class FeedbackStageMetrics extends React.Component {
    public render() {
        return (
            <Grid container direction="column" wrap="nowrap" spacing={24}>
                <Grid item container direction="column" wrap="nowrap" spacing={24}>
                    <Grid item>
                        <Typography variant="h6">
                            Faculty Feedback Gathered
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
                <Grid item container direction="row" wrap="nowrap" spacing={24}>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography>Number of Rejections</Typography>
                                {/* TODO: Number and map of chips */}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography>Number of Acceptance</Typography>
                                {/* TODO: Number and map of chips */}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
