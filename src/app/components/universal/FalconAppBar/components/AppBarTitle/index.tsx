import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";
import styles from "./styles";

interface IPropsType {
    pageTitle: string;
    classes: { [key: string]: string };
}

class AppBarTitle extends React.Component<IPropsType> {
    public render() {
        const { pageTitle, classes } = this.props;
        return (
            <Grid container alignItems="center" wrap="nowrap">
                <Grid item>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography color="inherit" className={classes.falconLogo}>
                        Falcon
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color="inherit" className={classes.pageTitle}>
                        {pageTitle}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(AppBarTitle);
