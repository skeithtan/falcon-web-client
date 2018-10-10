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
import InstructionalMaterial from "../../../../../../models/entities/instructional_material";
import InstructionalMaterialAudience, {
    InstructionalMaterialAudienceReadable,
} from "../../../../../../models/enums/instructional_material_audience";
import InstructionalMaterialMedium, {
    InstructionalMaterialMediumReadable,
} from "../../../../../../models/enums/instructional_material_medium";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import styles from "./styles";

interface IPropsType {
    instructionalMaterials: InstructionalMaterial[];
    classes: IStyleClasses;
}

@inject("facultyProfiles")
@observer
class InstructionalMaterialsView extends React.Component<IPropsType> {
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
                                    <Typography variant="subheading">
                                        {im.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <List className={classes.list}>
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
                                        {im.level !== undefined && (
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
                            </ExpansionPanel>
                        );
                    })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(InstructionalMaterialsView);
