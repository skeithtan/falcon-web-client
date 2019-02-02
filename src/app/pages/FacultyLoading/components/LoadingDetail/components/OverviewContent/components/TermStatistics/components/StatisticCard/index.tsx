import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";

interface IPropsType {
    statisticNumber: number;
    statistic: string;
}

@observer
export default class StatisticCard extends React.Component<IPropsType> {
    public render() {
        const { statisticNumber, statistic } = this.props;
        return (
            <Card square>
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={8}
                    >
                        <Grid item>
                            <Typography variant="h4">
                                {statisticNumber}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" color="textSecondary">
                                {statistic}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}
