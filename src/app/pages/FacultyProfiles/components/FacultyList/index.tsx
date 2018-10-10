import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
import IStyleClasses from "../../../../interfaces/style_classes";
import FacultyMemberType, { FacultyMemberTypeReadable } from "../../../../models/enums/faculty_member_type";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";
import FacultyItem from "./components/FacultyItem";
import styles from "./styles";

interface IPropsType {
    facultyProfiles?: FacultyProfilesState;
    classes: IStyleClasses;
}

@inject("facultyProfiles")
@observer
class FacultyList extends React.Component<IPropsType> {
    public onAddButtonClick = () =>
        FacultyProfilesController.toggleAddFacultyMemberForm(true);

    public render() {
        const { facultyProfiles, classes } = this.props;
        const { segregatedFacultyMembers } = facultyProfiles!;
        return (
            <React.Fragment>
                <List subheader={<li />} className={classes.list}>
                    {Object.keys(segregatedFacultyMembers).map(facultyType => {
                        const facultyMembers =
                            segregatedFacultyMembers[facultyType];
                        const readable = FacultyMemberTypeReadable.get(
                            facultyType as FacultyMemberType
                        );

                        return (
                            <li key={readable} className={classes.listSection}>
                                <ul className={classes.ul}>
                                    <ListSubheader>{readable}</ListSubheader>
                                    {facultyMembers.map(fm => (
                                        <FacultyItem
                                            facultyMember={fm}
                                            key={fm.id}
                                        />
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </List>
                <Button
                    variant="fab"
                    color="primary"
                    className={classes.addButton}
                    onClick={this.onAddButtonClick}
                >
                    <AddIcon />
                </Button>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(FacultyList);
