import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
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

@observer
class ExtensionWorksView extends React.Component<IPropsType> {
    public onDeleteClick = (extensionWork: ExtensionWork) => () => {
        if (
            confirm(
                `Are you sure you want to delete the extension work ${
                    extensionWork.title
                }`
            )
        ) {
            FacultyProfilesController.removeExtensionWork(extensionWork).catch(
                (e: Error) =>
                    alert(
                        `An error occurred while deleting the extension work ${
                            e.message
                        }`
                    )
            );
        }
    };

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
                                <ExpansionPanelDetails
                                    className={classes.panelDetail}
                                >
                                    <List
                                        className={classes.list}
                                        disablePadding
                                    >
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
                                <ExpansionPanelActions>
                                    <Button
                                        color="secondary"
                                        onClick={this.onDeleteClick(ew)}
                                    >
                                        Remove
                                    </Button>
                                </ExpansionPanelActions>
                            </ExpansionPanel>
                        );
                    })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ExtensionWorksView);
