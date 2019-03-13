import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import FacultyListItem from "./components/FacultyListItem";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class FacultyList extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading, classes } = this.props;
        const { facultyTabState } = facultyLoading!;
        const { segmentedFacultyMembers } = facultyTabState;
        return (
            <List subheader={<li />} className={classes.list}>
                {Array.from(segmentedFacultyMembers.entries())
                    .filter(([sectionName, fms]) => fms.length > 0)
                    .map(([sectionName, fms]) => (
                        <li key={sectionName} className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader className={classes.listHeader}>
                                    {sectionName}
                                </ListSubheader>
                                {fms.map(fm => (
                                    <FacultyListItem
                                        key={fm.facultyId}
                                        facultyMember={fm}
                                    />
                                ))}
                            </ul>
                        </li>
                    ))}
            </List>
        );
    }
}

export default withStyles(styles)(FacultyList);
