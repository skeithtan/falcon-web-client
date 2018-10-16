import Grid from "@material-ui/core/Grid";
import * as React from "react";
import DetailItem from "../../../../../../../components/reusable/DetailItem";
import InstructionalMaterial from "../../../../../../../models/entities/instructional_material";
import InstructionalMaterialAudience from "../../../../../../../models/enums/instructional_material_audience";
import PrintEmptyState from "../PrintEmptyState";
import PrintSubdocument from "../PrintSubdocument";

interface IPropsType {
    instructionalMaterials: InstructionalMaterial[];
}

export default class InstructionalMaterials extends React.Component<
    IPropsType
> {
    public render() {
        const { instructionalMaterials } = this.props;
        return (
            <React.Fragment>
                {instructionalMaterials.length === 0 && (
                    <PrintEmptyState subdocument="Instructional Materials" />
                )}

                {instructionalMaterials.length > 0 && (
                    <PrintSubdocument title="Instructional Materials">
                        <Grid container direction="row">
                            {instructionalMaterials.map(im => {
                                return (
                                    <Grid item xs key={im.id}>
                                        <DetailItem
                                            field="Title"
                                            value={im.title}
                                        />
                                        <DetailItem
                                            field="Medium"
                                            value={im.medium}
                                        />
                                        <DetailItem
                                            field="Audience"
                                            value={im.audience}
                                        />
                                        <DetailItem
                                            field="Usage Year"
                                            value={im.usageYear}
                                        />
                                        {im.audience ===
                                            InstructionalMaterialAudience.Student && (
                                            <DetailItem
                                                field="Student Level"
                                                value={`${im.level}`}
                                            />
                                        )}
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </PrintSubdocument>
                )}
            </React.Fragment>
        );
    }
}
