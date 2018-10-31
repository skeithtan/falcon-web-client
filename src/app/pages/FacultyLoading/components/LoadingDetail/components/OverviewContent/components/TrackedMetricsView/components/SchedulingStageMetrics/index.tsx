import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

export default class SchedulingStageMetrics extends React.Component {
    public render() {
        return (
            <Grid container direction="column" wrap="nowrap" spacing={24}>
                <Grid
                    item
                    container
                    direction="column"
                    wrap="nowrap"
                    spacing={24}
                >
                    <Grid item>
                        <Typography variant="h6">Assign Classes</Typography>
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
                                <Typography>
                                    Unassigned Faculty Members
                                </Typography>
                                {/* TODO: Number and map of chips */}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography>
                                    Underloaded Faculty Members
                                </Typography>
                                {/* TODO: Number and map of chips */}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item container direction="row" wrap="nowrap" spacing={24}>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography>
                                    Overloaded Faculty Members
                                </Typography>
                                {/* TODO: Number and map of chips */}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography>
                                    Incompatible Faculty Members
                                </Typography>
                                {/* TODO: Number and map of chips */}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
