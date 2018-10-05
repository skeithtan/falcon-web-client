import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ArrowDownIcon from "@material-ui/icons/ArrowDropDown";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { AuthenticationState } from "../../../../../store/authentication";
import UserTray from "../UserTray";

interface IPropsType {
    authentication?: AuthenticationState;
}

@inject("authentication")
@observer
class AppBarUtilities extends React.Component<IPropsType> {
    public state = {
        // tslint:disable-next-line
        userTrayAnchorEl: null,
    };

    public toggleUserTray = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            userTrayAnchorEl: event.currentTarget,
        });
    };

    public closeUserTray = () => {
        this.setState({
            // tslint:disable-next-line
            userTrayAnchorEl: null,
        });
    };

    public render() {
        const { authentication } = this.props;
        const { currentUser } = authentication!;
        const { userTrayAnchorEl } = this.state;

        return (
            <Grid container spacing={8} alignItems="center" wrap="nowrap">
                <Grid item>
                    <Button
                        onClick={this.toggleUserTray}
                        color="inherit"
                        variant="outlined"
                    >
                        {currentUser!.fullName}
                        <ArrowDownIcon />
                    </Button>
                    <UserTray
                        anchorEl={userTrayAnchorEl}
                        onClose={this.closeUserTray}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default AppBarUtilities;
