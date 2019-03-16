import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import FacultySublist from "./components/FacultySublist";
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
                        <FacultySublist
                            category={sectionName}
                            facultyMembers={fms}
                        />
                    ))}
            </List>
        );
    }
}

export default withStyles(styles)(FacultyList);
