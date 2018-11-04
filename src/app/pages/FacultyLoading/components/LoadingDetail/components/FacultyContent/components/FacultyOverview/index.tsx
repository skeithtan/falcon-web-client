import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import FacultyLoadingFacultyMember from "../../../../../../../../models/entities/faculty_loading_faculty_member";
import { FacultyMemberTypeReadable } from "../../../../../../../../models/enums/faculty_member_type";
import DetailDisplay from "./components/DetailDisplay";
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
                <Grid container direction="column" wrap="nowrap" spacing={8}>
                    <Grid item>
                        <Typography variant="h6">
                            {facultyMember.fullName}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Divider />
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        alignItems="center"
                        wrap="nowrap"
                        justify="space-between"
                    >
                        <Grid item>
                            <DetailDisplay
                                name="Faculty ID"
                                value={facultyMember.pnuId}
                            />
                        </Grid>
                        <Grid item>
                            <DetailDisplay
                                name="Faculty Type"
                                value={
                                    FacultyMemberTypeReadable.get(
                                        facultyMember.type
                                    )!
                                }
                            />
                        </Grid>
                        <Grid item>
                            <DetailDisplay
                                name="Load Status"
                                value={facultyMember.loadAmountStatus}
                            />
                        </Grid>
                        <Grid item>
                            <DetailDisplay
                                name="External Load"
                                value={
                                    facultyMember.hasExternalLoad
                                        ? "Has external load"
                                        : "No external load"
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}

export default withStyles(styles)(FacultyOverview);
