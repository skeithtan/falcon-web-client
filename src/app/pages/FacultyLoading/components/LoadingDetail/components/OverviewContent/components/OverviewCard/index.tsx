import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import UserType from "../../../../../../../../models/enums/user_type";
import { AuthenticationState } from "../../../../../../../../store/authentication";

interface IPropsType {
    name?: string;
    message: string;
    onRejectionClick?: () => void;
    onRemoveClick?: () => void;
    authentication?: AuthenticationState;
}

@inject("authentication")
@observer
export default class OverviewCard extends React.Component<IPropsType> {
    public render() {
        const {
            name,
            message,
            onRejectionClick,
            onRemoveClick,
            authentication,
        } = this.props;
        const { currentUser } = authentication!;
        return (
            <Card square>
                <CardActionArea onClick={onRejectionClick && onRejectionClick}>
                    <CardContent>
                        <Grid container direction="column" spacing={16}>
                            {name && (
                                <Grid item>
                                    <Typography variant="h6">
                                        <b>{name}</b>
                                    </Typography>
                                </Grid>
                            )}
                            <Grid item>
                                <Typography variant="subtitle1">
                                    {message}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                {onRemoveClick &&
                    currentUser!.authorization === UserType.AssociateDean && (
                        <CardActions>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={onRemoveClick}
                            >
                                Dismiss
                            </Button>
                        </CardActions>
                    )}
            </Card>
        );
    }
}
