import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

interface IPropsType {
    pageTitle: string;
}

class AppBarTitle extends React.Component<IPropsType> {
    public render() {
        const { pageTitle } = this.props;
        return (
            <Grid container alignItems="center" wrap="nowrap">
                <Grid item>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography>Falcon</Typography>
                </Grid>
                <Grid item>
                    <Typography>{pageTitle}</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default AppBarTitle;
