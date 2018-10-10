import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "src/app/interfaces/style_classes";
import DetailItem from "../../../../../../components/reusable/DetailItem";
import Degree from "../../../../../../models/entities/degree";
import DegreeLevel, {
    DegreeLevelReadable,
} from "../../../../../../models/enums/degree_level";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import styles from "./styles";

interface IPropsType {
    degrees: Degree[];
    classes: IStyleClasses;
}

@inject("facultyProfiles")
@observer
class DegreesView extends React.Component<IPropsType> {
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
                                    <Typography variant="subheading">
                                        {d.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <List className={classes.list}>
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
                            </ExpansionPanel>
                        );
                    })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(DegreesView);
