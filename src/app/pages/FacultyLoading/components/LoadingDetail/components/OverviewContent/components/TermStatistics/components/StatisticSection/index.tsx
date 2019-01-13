import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

interface IPropsType {
    title: string;
    children: React.ReactNode;
}

export default class StatisticSection extends React.Component<IPropsType> {
    public render() {
        const { title, children } = this.props;
        return (
            <Grid container direction="column" spacing={8}>
                <Grid item>
                    <Typography variant="caption">{title}</Typography>
                </Grid>
                <Grid item container direction="row" spacing={8}>
                    {children}
                </Grid>
            </Grid>
        );
    }
}
