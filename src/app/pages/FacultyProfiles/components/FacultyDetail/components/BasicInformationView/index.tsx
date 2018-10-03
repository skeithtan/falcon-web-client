import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Create from "@material-ui/icons/Create";
import Print from "@material-ui/icons/Print";
import { inject, observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import FacultyMember from "../../../../../../models/entities/faculty_member";
import FacultyMemberType, {
    FacultyMemberTypeReadable,
} from "../../../../../../models/enums/faculty_member_type";
import InformationItem from "./components/InformationItem";
import styles from "./styles";

interface IPropsType {
    canUpdate: boolean;
    classes: IStyleClasses;
    facultyMember: FacultyMember;
}

@inject("facultyProfiles")
@observer
class BasicInformationView extends React.Component<IPropsType> {
    public render() {
        const { canUpdate, classes, facultyMember } = this.props;
        const readableType = FacultyMemberTypeReadable.get(
            facultyMember.type as FacultyMemberType
        );
        const dateOfBirth = `${moment(facultyMember.birthDate).format(
            "LL"
        )} (${facultyMember.birthDate.fromNow(true)})`;
        return (
            <Card className={classes.card}>
                <Toolbar>
                    <Typography variant="headline">
                        {facultyMember.user!.fullName}
                    </Typography>
                    <div className={classes.grow} />
                    {canUpdate && (
                        <IconButton>
                            <Create />
                        </IconButton>
                    )}
                    <IconButton>
                        <Print />
                    </IconButton>
                </Toolbar>
                <List>
                    <InformationItem
                        field="Faculty Type"
                        value={readableType!}
                    />
                    <InformationItem
                        field="ID Number"
                        value={facultyMember.formattedPnuId}
                    />
                    <InformationItem
                        field="Email"
                        value={facultyMember.user!.email}
                    />
                    <InformationItem field="Sex" value={facultyMember.sex} />
                    <InformationItem
                        field="Date of Birth"
                        value={dateOfBirth}
                    />
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(BasicInformationView);
