import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Delete from "@material-ui/icons/Delete";
import * as React from "react";
import ProgramChip from "../../../../../../../../components/reusable/ProgramChip";
import ExtensionWork from "../../../../../../../../models/entities/extension_work";
import ExtensionWorkRole, {
    ExtensionWorkRoleReadable,
} from "../../../../../../../../models/enums/extension_work_role";
import Program, {
    ProgramReadable,
} from "../../../../../../../../models/enums/program";

interface IPropsType {
    extensionWork: ExtensionWork;
}

export default class ExtensionWorkItem extends React.Component<IPropsType> {
    public render() {
        const { extensionWork } = this.props;
        return (
            <TableRow>
                <TableCell>{extensionWork.title}</TableCell>
                <TableCell>{extensionWork.venue}</TableCell>
                <TableCell>
                    {extensionWork.roles.map(r => {
                        return (
                            <Chip
                                key={r}
                                label={
                                    ExtensionWorkRoleReadable.get(
                                        r
                                    ) as ExtensionWorkRole
                                }
                            />
                        );
                    })}
                </TableCell>
                <TableCell>
                    {extensionWork.associatedPrograms.map(ap => {
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
