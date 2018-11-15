import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Add from "@material-ui/icons/Add";
import { observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import SubdocumentEmptyState from "../SubdocumentEmptyState";
import styles from "./styles";

interface IPropsType {
    empty: boolean;
    name: string;
    onAddClick: () => void;
    canAdd: boolean;
    children: React.ReactNode;
    classes: IStyleClasses;
}

@observer
class FacultySubdocumentCard extends React.Component<IPropsType> {
    public render() {
        const {
            empty,
            name,
            onAddClick,
            canAdd,
            children,
            classes,
        } = this.props;
        return (
            <Card className={classes.card}>
                {empty && (
                    <SubdocumentEmptyState
                        title={name}
                        description={`This faculty member does not have ${name} yet.`}
                        addButton={`Add to ${name}`}
                        onButtonClick={onAddClick}
                    />
                )}

                {!empty && (
                    <div className={classes.cardItems}>
                        <Toolbar color="inherit">
                            <Typography variant="h6">{name}</Typography>
                            <div className={classes.grow} />
                            {canAdd && (
                                <Tooltip
                                    title={`Add to ${name}`}
                                    placement="left"
                                >
                                    <IconButton onClick={onAddClick}>
                                        <Add />
                                    </IconButton>
                                </Tooltip>
                            )}
                        </Toolbar>
                        {children}
                    </div>
                )}
            </Card>
        );
    }
}

export default withStyles(styles)(FacultySubdocumentCard);
