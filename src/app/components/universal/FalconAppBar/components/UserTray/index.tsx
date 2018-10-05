import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import UserController from "../../../../../controllers/user";
import IStyleClasses from "../../../../../interfaces/style_classes";
import { UserTypeReadable } from "../../../../../models/enums/user_type";
import { AuthenticationState } from "../../../../../store/authentication";
import styles from "./styles";

interface IPropsType {
    anchorEl: null | HTMLElement | ((element: HTMLElement) => HTMLElement);
    onClose: () => void;
    authentication?: AuthenticationState;
    classes: IStyleClasses;
}

@inject("authentication")
@observer
class UserTray extends React.Component<IPropsType> {
    public render() {
        const { anchorEl, onClose, authentication, classes } = this.props;
        const { currentUser } = authentication!;
        // tslint:disable-next-line
        window["lol"] = onClose;

        return (
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={onClose}
            >
                <div className={classes.userTrayPaper}>
                    <div className={classes.currentUserDisplay}>
                        <Typography>{currentUser!.fullName}</Typography>
                        <Typography color="textSecondary">
                            {currentUser!.email}
                        </Typography>
                        <Typography color="textSecondary">
                            {UserTypeReadable.get(currentUser!.authorization)}
                        </Typography>
                    </div>
                    <Divider />
                    <MenuItem onClick={UserController.signOut}>
                        Sign out from Falcon
                    </MenuItem>
                </div>
            </Popover>
        );
    }
}

export default withStyles(styles)(UserTray);
