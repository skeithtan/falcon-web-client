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
import ExtensionWork from "../../../../../../models/entities/extension_work";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import ExtensionRolesItem from "./components/ExtensionRolesItem";
import styles from "./styles";

interface IPropsType {
    extensionWorks: ExtensionWork[];
    classes: IStyleClasses;
}

@inject("facultyProfiles")
@observer
class ExtensionWorksView extends React.Component<IPropsType> {
    public render() {
        const { extensionWorks, classes } = this.props;
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
                                    <List className={classes.list}>
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

export default withStyles(styles)(ExtensionWorksView);
