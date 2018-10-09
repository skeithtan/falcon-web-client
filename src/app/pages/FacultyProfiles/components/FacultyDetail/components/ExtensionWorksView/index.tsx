import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import DetailItem from "../../../../../../components/reusable/DetailItem";
import ExtensionWork from "../../../../../../models/entities/extension_work";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import ExtensionRolesItem from "./components/ExtensionRolesItem";

interface IPropsType {
    extensionWorks: ExtensionWork[];
}

@inject("facultyProfiles")
@observer
export default class ExtensionWorksView extends React.Component<IPropsType> {
    public render() {
        const { extensionWorks } = this.props;
        return (
            <React.Fragment>
                {extensionWorks !== undefined &&
                    extensionWorks.map(ew => {
                        return (
                            <ExpansionPanel key={ew.id}>
                                <ExpansionPanelSummary>
                                    <Typography variant="subheading">
                                        {ew.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <List>
                                        <DetailItem
                                            field="Level"
                                            value={ew.venue}
                                        />
                                        <ExtensionRolesItem
                                            field="Roles"
                                            extensionWorkRoles={ew.roles}
                                        />
                                        <AssociatedProgramsItem
                                            field="Associated Programs"
                                            programs={ew.associatedPrograms!}
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
