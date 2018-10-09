import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    detail: string;
    classes: IStyleClasses;
}

class DetailChip extends React.Component<IPropsType> {
    public render() {
        const { detail, classes } = this.props;
        return <Chip label={detail} className={classes.chip} />;
    }
}

export default withStyles(styles)(DetailChip);
