import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import * as React from "react";

interface IPropsType {
    onCloseButtonClick: () => void;
    formTitle: string;
}

export default class DrawerFormHead extends React.Component<IPropsType> {
    public render() {
        const { onCloseButtonClick, formTitle } = this.props;

        return (
            <CardActions>
                <Grid
                    container
                    direction="row"
                    spacing={8}
                    wrap="nowrap"
                    alignItems="center"
                >
                    <Grid item>
                        <IconButton onClick={onCloseButtonClick}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">{formTitle}</Typography>
                    </Grid>
                </Grid>
            </CardActions>
        );
    }
}
