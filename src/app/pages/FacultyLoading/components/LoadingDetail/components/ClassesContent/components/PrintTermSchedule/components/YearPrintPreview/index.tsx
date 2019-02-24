import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as moment from "moment";
import * as React from "react";
import PrintPreviewHead from "../../../../../../../../../../components/reusable/PrintPreviewHead";
import Term from "../../../../../../../../../../models/entities/term";
import { MeetingDaysReadable } from "../../../../../../../../../../models/enums/meeting_days";
import ScheduleTable from "../ScheduleTable";

interface IPropsType {
    terms?: Term[];
    startYear: number;
}

export default class YearPrintPreview extends React.Component<IPropsType> {
    public render() {
        const { terms, startYear } = this.props;
        return (
            <Grid container direction="column" wrap="nowrap" spacing={24}>
                <Grid item>
                    <PrintPreviewHead />
                </Grid>
                {terms!.map(term => (
                    <Grid item container spacing={16}>
                        <Grid
                            item
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="h6">
                                    {`Schedule for ${
                                        term.term
                                    } Term ${startYear} - ${startYear + 1}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="overline"
                                    color="textSecondary"
                                >
                                    Generated {moment().format("LLLL")}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" spacing={24}>
                            {term.classSchedules! &&
                                Array.from(MeetingDaysReadable).map(
                                    ([mdrEnum, mdrStr]) => {
                                        const dayClasses = term.classSchedules!.filter(
                                            cs => cs.meetingDays === mdrEnum
                                        );

                                        return (
                                            <Grid item key={mdrEnum}>
                                                <ScheduleTable
                                                    meetingDays={mdrStr}
                                                    classSchedules={dayClasses}
                                                />
                                            </Grid>
                                        );
                                    }
                                )}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        );
    }
}
