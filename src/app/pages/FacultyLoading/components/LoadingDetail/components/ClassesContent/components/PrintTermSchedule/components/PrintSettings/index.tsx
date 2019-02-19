import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as _ from "lodash";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { FacultyLoadingState } from "../../../../../../../../../../store/faculty_loading";

interface IPropsType {
    facultyLoading?: FacultyLoadingState;
}

@inject("facultyLoading")
@observer
export default class PrintSettings extends React.Component<IPropsType> {
    public onCourseChange = (event: any) => {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const { printTermScheduleState } = classesTabState;
        if (event.target.value === "None") {
            printTermScheduleState.courseFilter = "";
        }
        printTermScheduleState.courseFilter = event.target.value;
    };

    public onSubjectChange = (event: any) => {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const { printTermScheduleState } = classesTabState;
        if (event.target.value === "None") {
            printTermScheduleState.subjectFilter = "";
        }
        printTermScheduleState.subjectFilter = event.target.value;
    };

    public render() {
        const { facultyLoading } = this.props;
        const { classesTabState } = facultyLoading!;
        const {
            classSchedules,
            printTermScheduleState: { courseFilter, subjectFilter },
        } = classesTabState;
        const noCourseFilter = courseFilter === "";
        const noSubjectFilter = subjectFilter === "";

        const courses: string[] = [];
        const subjects: string[] = [];
        Array.from(classSchedules!.values()).map(cs => {
            courses.push(cs.course);
            subjects.push(cs.subjectCode);
        });
        const uniqueCourses = _.uniq(courses);
        const uniqueSubjects = _.uniq(subjects);

        let filteredCourses = [];
        filteredCourses = uniqueCourses;
        if (!noCourseFilter) {
            filteredCourses = uniqueCourses.filter(
                course => course === courseFilter
            );
        }

        let filteredSubjects = [];
        filteredSubjects = uniqueSubjects;
        if (!noSubjectFilter) {
            filteredSubjects = uniqueSubjects.filter(
                subject => subject === subjectFilter
            );
        }

        return (
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <Typography variant="h6">Filter by school year</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">Filter by course</Typography>
                    <TextField
                        label="Course"
                        variant="outlined"
                        value={courseFilter || ""}
                        select
                        onChange={this.onCourseChange}
                        fullWidth
                    >
                        <MenuItem value="">None</MenuItem>
                        {filteredCourses &&
                            filteredCourses.map(course => (
                                <MenuItem key={course} value={course}>
                                    {course}
                                </MenuItem>
                            ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <Typography variant="h6">Filter by subject</Typography>
                    <TextField
                        label="Subject"
                        variant="outlined"
                        value={subjectFilter || ""}
                        select
                        onChange={this.onSubjectChange}
                        fullWidth
                    >
                        <MenuItem value="">None</MenuItem>
                        {filteredSubjects &&
                            filteredSubjects.map(subject => (
                                <MenuItem key={subject} value={subject}>
                                    {subject}
                                </MenuItem>
                            ))}
                    </TextField>
                </Grid>
            </Grid>
        );
    }
}
