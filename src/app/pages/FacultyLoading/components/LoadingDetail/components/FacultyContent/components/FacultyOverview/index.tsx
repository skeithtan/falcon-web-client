import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import FacultyLoadingFacultyMember from "../../../../../../../../models/entities/faculty_loading_faculty_member";
import FacultyMemberType, {
    FacultyMemberTypeReadable,
} from "../../../../../../../../models/enums/faculty_member_type";
import styles from "./styles";

interface IPropsType {
    facultyMember: FacultyLoadingFacultyMember;
    classes: IStyleClasses;
}

class FacultyOverview extends React.Component<IPropsType> {
    public render() {
        const { facultyMember, classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid
                        container
                        direction="row"
                        alignItems="stretch"
                        wrap="nowrap"
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            className={classes.overview}
                        >
                            <Grid item>
                                <Typography variant="h5">
                                    {facultyMember.fullName}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">{`T-${
                                    facultyMember.pnuId
                                }`}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    {
                                        FacultyMemberTypeReadable.get(
                                            facultyMember.type
                                        ) as FacultyMemberType
                                    }
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column">
                            <Grid item>
                                <Typography variant="h6">
                                    {facultyMember.loadAmountStatus}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(FacultyOverview);
