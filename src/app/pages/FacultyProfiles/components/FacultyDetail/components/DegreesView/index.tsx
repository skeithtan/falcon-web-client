import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import Degree from "../../../../../../models/entities/degree";
import AssociatedProgramsItem from "../AssociatedProgramsItem";
import FacultyDetailItem from "../FacultyDetailItem";
interface IPropsType {
    degrees: Degree[];
}

@inject("facultyProfiles")
@observer
export default class DegreesView extends React.Component<IPropsType> {
    public render() {
        const { degrees } = this.props;
        return (
            <React.Fragment>
                {degrees !== undefined &&
                    degrees.map(d => {
                        return (
                            <ExpansionPanel key={d.id}>
                                <ExpansionPanelSummary>
                                    <Typography variant="subheading">
                                        {d.title}
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <List>
                                        <FacultyDetailItem
                                            field="Level"
                                            value={d.level}
                                        />
                                        <FacultyDetailItem
                                            field="Completion Year"
                                            value={d.completionYear}
                                        />
                                        <AssociatedProgramsItem
                                            field="Associated Programs"
                                            programs={d.associatedPrograms!}
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
