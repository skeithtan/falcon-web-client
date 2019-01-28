import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import PrintIcon from "@material-ui/icons/Print";
import { observer } from "mobx-react";
import * as React from "react";
import FacultyLoadingController from "../../../../../../../../controllers/faculty_loading";
import IStyleClasses from "../../../../../../../../interfaces/style_classes";
import FacultyLoadingFacultyMember from "../../../../../../../../models/entities/faculty_loading_faculty_member";
import { FacultyMemberTypeReadable } from "../../../../../../../../models/enums/faculty_member_type";
import DetailDisplay from "./components/DetailDisplay";
import PrintSchedule from "./components/PrintSchedule";
import styles from "./styles";

interface IPropsType {
    facultyMember: FacultyLoadingFacultyMember;
    classes: IStyleClasses;
}

@observer
class FacultyOverview extends React.Component<IPropsType> {
    public onPrintClick = (shouldShow: boolean) => () => {
        FacultyLoadingController.togglePrintFacultySchedule(shouldShow);
    };

    public render() {
        const { facultyMember, classes } = this.props;
        return (
            <React.Fragment>
                <Card className={classes.card}>
                    <Grid
                        container
                        direction="column"
                        wrap="nowrap"
                        spacing={8}
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            wrap="nowrap"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="h6">
                                    {facultyMember.fullName}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Tooltip
                                    placement="left"
                                    title="Print Schedule"
                                >
                                    <IconButton
                                        onClick={this.onPrintClick(true)}
                                    >
                                        <PrintIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
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
                        </Grid>
                    </Grid>
                </Card>
                <PrintSchedule />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(FacultyOverview);
