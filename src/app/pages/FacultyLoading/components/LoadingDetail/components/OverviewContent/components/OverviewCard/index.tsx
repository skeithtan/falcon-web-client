import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

interface IPropsType {
    name: string;
    message: string;
    onRemoveClick?: () => void;
}

export default class OverviewCard extends React.Component<IPropsType> {
    public render() {
        const { name, message, onRemoveClick } = this.props;
        return (
            <Card>
                <CardContent>
                    <Typography>{name}</Typography>
                    <Divider />
                    <Typography variant="subtitle1">{message}</Typography>
                </CardContent>
                <CardActions>
                    {onRemoveClick && (
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={onRemoveClick}
                        >
                            Remove
                        </Button>
                    )}
                </CardActions>
            </Card>
        );
    }
}
