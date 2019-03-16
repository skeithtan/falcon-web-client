import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import FacultyProfile from "../../../../../../models/entities/faculty_profile";
import FacultyItem from "../FacultyItem";
import styles from "./styles";

interface IPropsType {
    category: string;
    facultyMembers: FacultyProfile[];
    classes: IStyleClasses;
}

class FacultySublist extends React.Component<IPropsType> {
    public state = {
        expanded: true,
    };

    public togglePanel = () => {
        this.setState({
            expanded: !this.state.expanded,
        });
    };

    public render() {
        const { expanded } = this.state;
        const { category, classes, facultyMembers } = this.props;
        return (
            <ExpansionPanel expanded={expanded}>
                <ExpansionPanelSummary onClick={this.togglePanel}>
                    <Typography>{category}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionDetail}>
                    <li key={category} className={classes.listSection}>
                        <ul className={classes.ul}>
                            {facultyMembers.map(fm => (
                                <FacultyItem key={fm.id} facultyMember={fm} />
                            ))}
                        </ul>
                    </li>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withStyles(styles)(FacultySublist);
