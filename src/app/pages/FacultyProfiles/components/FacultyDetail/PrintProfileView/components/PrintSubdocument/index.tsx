import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

interface IPropsType {
    title: string;
    children: React.ReactNode;
}

export default class PrintSubdocument extends React.Component<IPropsType> {
    public render() {
        const { title, children } = this.props;
        return (
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="overline">{title}</Typography>
                </Grid>
                <Grid item>{children}</Grid>
            </Grid>
        );
    }
}
