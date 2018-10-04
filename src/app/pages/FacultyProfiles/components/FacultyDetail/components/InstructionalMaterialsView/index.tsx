import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import InstructionalMaterial from "../../../../../../models/entities/instructional_material";
import InstructionalMaterialAudience, {
    InstructionalMaterialAudienceReadable,
} from "../../../../../../models/enums/instructional_material_audience";
import InstructionalMaterialMedium, {
    InstructionalMaterialMediumReadable,
} from "../../../../../../models/enums/instructional_material_medium";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import FacultyDetailItem from "../FacultyDetailItem";

interface IPropsType {
    instructionalMaterials: InstructionalMaterial[];
}

@inject("facultyProfiles")
@observer
export default class InstructionalMaterialsView extends React.Component<
    IPropsType
> {
    public render() {
        const { instructionalMaterials } = this.props;
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
                                    <List>
                                        <FacultyDetailItem
                                            field="Medium"
                                            value={medium}
                                        />
                                        <FacultyDetailItem
                                            field="Audience"
                                            value={audience}
                                        />
                                        <FacultyDetailItem
                                            field="Usage Year"
                                            value={im.usageYear}
                                        />
                                        {im.level !== undefined && (
                                            <FacultyDetailItem
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
