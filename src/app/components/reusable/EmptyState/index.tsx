import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    title: string;
    description: string;
    addButton?: string;
    onButtonClick: (event: React.MouseEvent<HTMLElement>) => void;
    classes: IStyleClasses;
}

class EmptyState extends React.Component<IPropsType> {
    public render() {
        const {
            title,
            description,
            addButton,
            onButtonClick,
            classes,
        } = this.props;

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
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
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(EmptyState);
