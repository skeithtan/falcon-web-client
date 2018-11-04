import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

interface IPropsType {
    name: string;
    value: string;
}

export default class DetailDisplay extends React.Component<IPropsType> {
    public render() {
        const { name, value } = this.props;
        return (
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="overline">{name}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{value}</Typography>
                </Grid>
            </Grid>
        );
    }
}
