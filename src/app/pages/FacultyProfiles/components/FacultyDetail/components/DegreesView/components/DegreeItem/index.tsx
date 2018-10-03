import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Delete from "@material-ui/icons/Delete";
import * as React from "react";
import ProgramChip from "../../../../../../../../components/reusable/ProgramChip";
import Degree from "../../../../../../../../models/entities/degree";
import Program, {
    ProgramReadable,
} from "../../../../../../../../models/enums/program";

interface IPropsType {
    degree: Degree;
}

export default class DegreeItem extends React.Component<IPropsType> {
    public render() {
        const { degree } = this.props;
        return (
            <TableRow>
                <TableCell>{degree.title}</TableCell>
                <TableCell>{degree.level}</TableCell>
                <TableCell>{degree.completionYear}</TableCell>
                <TableCell>
                    {degree.associatedPrograms.map(ap => {
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
