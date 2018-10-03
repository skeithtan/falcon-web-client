import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Delete from "@material-ui/icons/Delete";
import * as React from "react";
import ProgramChip from "../../../../../../../../components/reusable/ProgramChip";
import InstructionalMaterial from "../../../../../../../../models/entities/instructional_material";
import InstructionalMaterialAudience, {
    InstructionalMaterialAudienceReadable,
} from "../../../../../../../../models/enums/instructional_material_audience";
import InstructionalMaterialMedium, {
    InstructionalMaterialMediumReadable,
} from "../../../../../../../../models/enums/instructional_material_medium";
import Program, {
    ProgramReadable,
} from "../../../../../../../../models/enums/program";

interface IPropsType {
    instructionalMaterial: InstructionalMaterial;
}

export default class InstructionalMaterialItem extends React.Component<
    IPropsType
> {
    public render() {
        const { instructionalMaterial } = this.props;
        const medium = InstructionalMaterialMediumReadable.get(
            instructionalMaterial.medium
        ) as InstructionalMaterialMedium;
        const audience = InstructionalMaterialAudienceReadable.get(
            instructionalMaterial.audience
        ) as InstructionalMaterialAudience;
        return (
            <TableRow>
                <TableCell>{instructionalMaterial.title}</TableCell>
                <TableCell>{medium}</TableCell>
                <TableCell>{audience}</TableCell>
                <TableCell>{instructionalMaterial.usageYear}</TableCell>
                <TableCell>{instructionalMaterial.level}</TableCell>
                <TableCell>
                    {instructionalMaterial.associatedPrograms.map(ap => {
                        return (
                            <ProgramChip
                                key={ap}
                                program={ProgramReadable.get(ap) as Program}
                            />
                        );
                    })}
                </TableCell>
                <TableCell>
                    <React.Fragment>
                        <IconButton>
                            <Delete />
                        </IconButton>
                    </React.Fragment>
                </TableCell>
            </TableRow>
        );
    }
}
