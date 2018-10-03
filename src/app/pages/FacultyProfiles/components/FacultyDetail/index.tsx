import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { inject, observer } from "mobx-react";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import { FacultyProfilesState } from "../../../../store/faculty_profiles";
import BasicInformationView from "./components/BasicInformationView";
import FacultySubdocumentCard from "./components/FacultySubdocumentCard";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
    facultyProfiles?: FacultyProfilesState;
}

@inject("facultyProfiles")
@observer
class FacultyDetail extends React.Component<IPropsType> {
    public temporaryAddClick() {
        global.console.log("Cool! You wanna add something!");
    }

    public render() {
        const { classes, facultyProfiles } = this.props;
        const { activeFacultyMember } = facultyProfiles!;

        return (
            <div>
                {activeFacultyMember === undefined && (
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>Hey select someone</Grid>
                    </Grid>
                )}

                {activeFacultyMember !== undefined && (
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.detail}
                        spacing={24}
                    >
                        <Grid item className={classes.item}>
                            <BasicInformationView
                                facultyMember={activeFacultyMember}
                                canUpdate
                            />
                        </Grid>
                        <Grid item className={classes.item}>
                            <FacultySubdocumentCard
                                empty={false}
                                name="test"
                                onAddClick={this.temporaryAddClick}
                                canAdd={true}
                            >
                                <div>Something</div>
                            </FacultySubdocumentCard>
                        </Grid>
                    </Grid>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(FacultyDetail);
