import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Create from "@material-ui/icons/Create";
import Print from "@material-ui/icons/Print";
import { observer } from "mobx-react";
import * as moment from "moment";
import * as React from "react";
import DetailItem from "../../../../../../components/reusable/DetailItem";
import FacultyProfilesController from "../../../../../../controllers/faculty_profiles";
import IStyleClasses from "../../../../../../interfaces/style_classes";
import FacultyMember from "../../../../../../models/entities/faculty_member";
import FacultyMemberType, {
    FacultyMemberTypeReadable,
} from "../../../../../../models/enums/faculty_member_type";
import styles from "./styles";

interface IPropsType {
    canUpdate: boolean;
    classes: IStyleClasses;
    facultyMember: FacultyMember;
}

@observer
class BasicInformationView extends React.Component<IPropsType> {
    public toggleUpdateFacultyForm = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleUpdateFacultyMemberForm(shouldShow);
    };

    public printProfileToggle = (shouldShow: boolean) => () => {
        FacultyProfilesController.toggleProfilePrintPreview(shouldShow);
    };

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
                    <div onClick={this.toggleUpdateFacultyForm(true)} />
                    <Typography variant="headline">
                        {facultyMember.user!.fullName}
                    </Typography>
                    <div className={classes.grow} />
                    {canUpdate && (
                        <Tooltip title="Update information">
                            <IconButton
                                onClick={this.toggleUpdateFacultyForm(true)}
                            >
                                <Create />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Tooltip title="Print profile">
                        <IconButton onClick={this.printProfileToggle(true)}>
                            <Print />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
                <List disablePadding>
                    <DetailItem field="Faculty Type" value={readableType!} />
                    <DetailItem
                        field="ID Number"
                        value={facultyMember.formattedPnuId}
                    />
                    <DetailItem
                        field="Email"
                        value={facultyMember.user!.email}
                    />
                    <DetailItem field="Sex" value={facultyMember.sex} />
                    <DetailItem field="Date of Birth" value={dateOfBirth} />
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(BasicInformationView);
