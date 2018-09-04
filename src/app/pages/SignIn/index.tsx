import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { inject, observer } from "mobx-react";
import * as React from "react";
import pnuLogo from "../../../assets/images/pnu-logo.png";
import { user } from "../../controllers";
import { FetchableState } from "../../models/enums";
import { AuthenticationState } from "../../store/authentication";
import styles from "./styles";

interface IPropsType {
    authentication?: AuthenticationState;
    classes: { [key: string]: string };
}

@inject("authentication")
@observer
class SignInPage extends React.Component<IPropsType> {
    public state = {
        email: "",
        password: "",
    };

    public componentDidMount() {
        document.title = "Sign In - Falcon";
    }

    public handleChange = (name: string) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        this.setState({
            [name]: event!.target!.value!,
        });
    };

    public onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const { email, password } = this.state;
        user.signIn(email, password);
    };

    public render() {
        const { authentication, classes } = this.props;
        const fetchState = authentication!.fetchState;

        const { email, password } = this.state;
        const formIsIncomplete = email.length === 0 || password.length === 0;
        const formIsSubmitting = fetchState === FetchableState.Fetching;

        return (
            <div className={classes.background}>
                <Card>
                    {fetchState === FetchableState.Fetching && (
                        <LinearProgress />
                    )}
                    <div className={classes.cardContent}>
                        <Grid container spacing={24} direction="column">
                            <Grid item>
                                <img
                                    src={pnuLogo}
                                    className={classes.cardImage}
                                    alt="PNU Logo"
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="headline" color="primary">
                                    Sign in to Falcon
                                </Typography>
                                <Typography
                                    variant="subheading"
                                    color="textSecondary"
                                >
                                    Faculty of Arts and Languages
                                </Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={this.onSubmit}>
                                    <Grid
                                        container
                                        spacing={32}
                                        direction="column"
                                    >
                                        {authentication!.fetchError && (
                                            <Grid item>
                                                <Typography color="error">
                                                    {authentication!.fetchError}
                                                </Typography>
                                            </Grid>
                                        )}

                                        <Grid item>
                                            {" "}
                                            <TextField
                                                label="Email Address"
                                                fullWidth={true}
                                                value={email}
                                                autoComplete="email"
                                                disabled={formIsSubmitting}
                                                onChange={this.handleChange(
                                                    "email"
                                                )}
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField
                                                label="Password"
                                                fullWidth={true}
                                                type="password"
                                                value={password}
                                                disabled={formIsSubmitting}
                                                autoComplete="current-password"
                                                onChange={this.handleChange(
                                                    "password"
                                                )}
                                            />
                                        </Grid>
                                        <Grid item container justify="flex-end">
                                            <Grid item>
                                                <Button
                                                    type="submit"
                                                    variant="raised"
                                                    color="primary"
                                                    disabled={
                                                        formIsIncomplete ||
                                                        formIsSubmitting
                                                    }
                                                >
                                                    Sign In
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(SignInPage);
