import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import pnuLogo from "../../../../../../assets/images/pnu-logo.png";
import styles from "./styles";

interface IPropsType {
    classes: { [key: string]: string };
}

class DrawerHead extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                spacing={16}
                direction="column"
                className={classes.drawerHeadContainer}
            >
                <Grid item>
                    <img
                        src={pnuLogo}
                        alt="PNU Logo"
                        className={classes.pnuLogo}
                    />
                </Grid>
                <Grid item>
                    <Typography className={classes.falconLogo}>
                        Falcon
                    </Typography>
                    <Typography variant="caption">
                        Philippine Normal University
                    </Typography>
                    <Typography variant="caption">
                        Faculty of Arts and Languages
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(DrawerHead);
