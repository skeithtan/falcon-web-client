import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import * as React from "react";
import FacultyProfilesController from "src/app/controllers/faculty_profiles";
import IStyleClasses from "../../../../interfaces/style_classes";
import FacultyMemberType, {
    FacultyMemberTypeReadable,
} from "../../../../models/enums/faculty_member_type";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";
import FacultySublist from "./components/FacultySublist";
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
                            <FacultySublist
                                key={readable}
                                category={readable!}
                                facultyMembers={facultyMembers}
                            />
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
