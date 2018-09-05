import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { inject, observer } from "mobx-react";
import * as React from "react";

@inject("authentication")
@observer
class AppBarUtilities extends React.Component {
    public state = {
        notificationTrayIsShowing: false,
        userTrayIsShowing: false,
    };

    public toggleStateItem = (stateItem: string) => (event: React.MouseEvent) =>
        this.setState({
            [stateItem]: event.currentTarget,
        });

    public render() {
        return (
            <Grid container spacing={8} alignItems="center" wrap="nowrap">
                <Grid item>
                    <Tooltip disableFocusListener title="Notifications">
                        <IconButton
                            color="inherit"
                            onClick={this.toggleStateItem(
                                "notificationTrayIsShowing"
                            )}
                        >
                            <NotificationsIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item>
                    {
                        // TODO: This
                    }
                </Grid>
            </Grid>
        );
    }
}

export default AppBarUtilities;
