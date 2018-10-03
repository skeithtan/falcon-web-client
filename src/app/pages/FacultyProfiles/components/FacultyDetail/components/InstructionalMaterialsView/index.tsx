import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { inject, observer } from "mobx-react";
import * as React from "react";
import InstructionalMaterial from "../../../../../../models/entities/instructional_material";
import InstructionalMaterialItem from "./components/InstructionalMaterialItem";

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
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Audience</TableCell>
                        <TableCell>Usage Year</TableCell>
                        <TableCell>Student Level</TableCell>
                        <TableCell>Associated Programs</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                {instructionalMaterials !== undefined && (
                    <TableBody>
                        {instructionalMaterials.map(im => {
                            return (
                                <InstructionalMaterialItem
                                    key={im.id}
                                    instructionalMaterial={im}
                                />
                            );
                        })}
                    </TableBody>
                )}
            </Table>
        );
    }
}
