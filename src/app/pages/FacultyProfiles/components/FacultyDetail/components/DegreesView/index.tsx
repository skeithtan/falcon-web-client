import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
import IStyleClasses from "src/app/interfaces/style_classes";
import DetailItem from "../../../../../../components/reusable/DetailItem";
import Degree from "../../../../../../models/entities/degree";
import DegreeLevel, { DegreeLevelReadable } from "../../../../../../models/enums/degree_level";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import styles from "./styles";

interface IPropsType {
    degrees: Degree[];
    classes: IStyleClasses;
}

@observer
class DegreesView extends React.Component<IPropsType> {
    public onDeleteClick = (degree: Degree) => () => {
        if (
            confirm(
                `Are you sure you want to delete the degree ${degree.title}`
            )
        ) {
            FacultyProfilesController.removeDegree(degree).catch((e: Error) =>
                alert(
                    `An error occurred while deleting the degree ${e}`
                )
            );
        }
    };

    public render() {
        const { degrees, classes } = this.props;
        return (
            <React.Fragment>
                {degrees !== undefined &&
                    degrees.map(d => {
                        const level = DegreeLevelReadable.get(
                            d.level
                        ) as DegreeLevel;
                        return (
                            <ExpansionPanel key={d.id}>
                                <ExpansionPanelSummary>
                                    <Typography variant="subtitle1">
                                        {d.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails
                                    className={classes.panelDetail}
                                >
                                    <List
                                        className={classes.list}
                                        disablePadding
                                    >
                                        <DetailItem
                                            field="Level"
                                            value={level}
                                        />
                                        <DetailItem
                                            field="Completion Year"
                                            value={d.completionYear}
                                        />
                                        <AssociatedProgramsItem
                                            field="Associated Programs"
                                            programs={d.associatedPrograms!}
                                        />
                                    </List>
                                </ExpansionPanelDetails>
                                <ExpansionPanelActions>
                                    <Button
                                        color="secondary"
                                        onClick={this.onDeleteClick(d)}
                                    >
                                        Remove
                                    </Button>
                                </ExpansionPanelActions>
                            </ExpansionPanel>
                        );
                    })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(DegreesView);
