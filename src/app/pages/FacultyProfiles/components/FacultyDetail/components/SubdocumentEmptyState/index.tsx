import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

interface IPropsType {
    title: string;
    description: string;
    addButton?: string;
    onButtonClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default class EmptyState extends React.Component<IPropsType> {
    public render() {
        const {
            title,
            description,
            addButton,
            onButtonClick,
        } = this.props;

        return (
            <div>
                <CardContent>
                    <Typography gutterBottom variant="headline">
                        {title}
                    </Typography>
                    <Typography gutterBottom color="textSecondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={onButtonClick}
                        color="primary"
                        size="small"
                    >
                        {addButton ? addButton : "Add"}
                    </Button>
                </CardActions>
            </div>
        );
    }
}
