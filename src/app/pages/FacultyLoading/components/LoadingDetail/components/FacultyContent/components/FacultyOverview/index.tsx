import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import FacultyMemberType, {
    FacultyMemberTypeReadable,
} from "../../../../../../../../models/enums/faculty_member_type";
import { FacultyLoadingState } from "../../../../../../../../store/faculty_loading";
import styles from "./styles";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
    classes: IStyleClasses;
}

@inject("facultyLoading")
@observer
class FacultyOverview extends React.Component<IPropsType> {
    public render() {
        const { facultyLoading, classes } = this.props;
        const { facultyTabState } = facultyLoading!;
        const { activeFaculty } = facultyTabState;
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
                                    {activeFaculty!.fullName}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">{`T-${
                                    activeFaculty!.pnuId
                                }`}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    {
                                        FacultyMemberTypeReadable.get(
                                            activeFaculty!.type
                                        ) as FacultyMemberType
                                    }
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column">
                            <Grid item>
                                <Typography variant="h6">
                                    {activeFaculty!.loadAmountStatus}
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
