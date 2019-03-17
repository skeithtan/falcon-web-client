import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import FacultyProfile from "../../../../../../../../../../models/entities/faculty_profile";

interface IPropsType {
    title: string;
    facultyMembers: FacultyProfile[];
}

export default class LoadStatisticPanel extends React.Component<IPropsType> {
    public render() {
        const { title, facultyMembers } = this.props;
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary>
                    <Typography variant="subtitle2">{title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {facultyMembers.length > 0 && (
                        <List>
                            {facultyMembers.map(fm => (
                                <ListItem key={fm.id}>
                                    <ListItemText>{`${fm.firstName} ${
                                        fm.lastName
                                    }`}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    )}
                    {facultyMembers.length === 0 && (
                        <Typography>{`No one is listed under ${title}`}</Typography>
                    )}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}
