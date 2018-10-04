import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    program: string;
    classes: IStyleClasses;
}

class ProgramChip extends React.Component<IPropsType> {
    public render() {
        const { program, classes } = this.props;
        return <Chip label={program} className={classes.chip} />;
    }
}

export default withStyles(styles)(ProgramChip);
