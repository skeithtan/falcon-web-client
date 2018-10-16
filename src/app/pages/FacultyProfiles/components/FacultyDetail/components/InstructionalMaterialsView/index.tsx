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
import InstructionalMaterial from "../../../../../../models/entities/instructional_material";
import InstructionalMaterialAudience, { InstructionalMaterialAudienceReadable } from "../../../../../../models/enums/instructional_material_audience";
import InstructionalMaterialMedium, { InstructionalMaterialMediumReadable } from "../../../../../../models/enums/instructional_material_medium";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import styles from "./styles";

interface IPropsType {
    instructionalMaterials: InstructionalMaterial[];
    classes: IStyleClasses;
}

@observer
class InstructionalMaterialsView extends React.Component<IPropsType> {
    public onDeleteClick = (
        instructionalMaterial: InstructionalMaterial
    ) => () => {
        if (
            confirm(
                `Are you sure you want to delete the instructional material ${
                    instructionalMaterial.title
                }`
            )
        ) {
            FacultyProfilesController.removeInstructionalMaterial(
                instructionalMaterial
            ).catch((e: Error) =>
                alert(
                    `An error occurred while deleting the instructional material ${
                        e
                    }`
                )
            );
        }
    };

    public render() {
        const { instructionalMaterials, classes } = this.props;
        return (
            <React.Fragment>
                {instructionalMaterials !== undefined &&
                    instructionalMaterials.map(im => {
                        const medium = InstructionalMaterialMediumReadable.get(
                            im.medium
                        ) as InstructionalMaterialMedium;
                        const audience = InstructionalMaterialAudienceReadable.get(
                            im.audience
                        ) as InstructionalMaterialAudience;
                        return (
                            <ExpansionPanel key={im.id}>
                                <ExpansionPanelSummary>
                                    <Typography variant="subtitle1">
                                        {im.title}
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
                                            field="Medium"
                                            value={medium}
                                        />
                                        <DetailItem
                                            field="Audience"
                                            value={audience}
                                        />
                                        <DetailItem
                                            field="Usage Year"
                                            value={im.usageYear}
                                        />
                                        {Boolean(im.level) && (
                                            <DetailItem
                                                field="Student Level"
                                                value={`${im.level}`}
                                            />
                                        )}
                                        <AssociatedProgramsItem
                                            field="Associated Programs"
                                            programs={im.associatedPrograms!}
                                        />
                                    </List>
                                </ExpansionPanelDetails>
                                <ExpansionPanelActions>
                                    <Button
                                        color="secondary"
                                        onClick={this.onDeleteClick(im)}
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

export default withStyles(styles)(InstructionalMaterialsView);
