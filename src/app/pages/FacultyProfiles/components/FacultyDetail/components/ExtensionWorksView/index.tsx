import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { inject, observer } from "mobx-react";
import * as React from "react";
import ExtensionWork from "../../../../../../models/entities/extension_work";
import ExtensionWorkItem from "./components/ExtensionWorkItem";

interface IPropsType {
    extensionWorks: ExtensionWork[];
}

@inject("facultyProfiles")
@observer
export default class ExtensionWorksView extends React.Component<IPropsType> {
    public render() {
        const { extensionWorks } = this.props;
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Venue</TableCell>
                        <TableCell>Roles</TableCell>
                        <TableCell>Associated Programs</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                {extensionWorks !== undefined && (
                    <TableBody>
                        {extensionWorks.map(ew => {
                            return (
                                <ExtensionWorkItem
                                    key={ew.id}
                                    extensionWork={ew}
                                />
                            );
                        })}
                    </TableBody>
                )}
            </Table>
        );
    }
}
