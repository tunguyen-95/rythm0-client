import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function SignupForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          className="login-container"
        >
          <Grid item>
            <h4>Create your account</h4>
          </Grid>

          <TextField
            id="outlined-name"
            label="Name"
            type="name"
            name="name"
            margin="normal"
            variant="outlined"
            value={props.values.name}
            onChange={props.onChange}
          />

          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            value={props.values.email}
            onChange={props.onChange}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            margin="normal"
            variant="outlined"
            value={props.values.password}
            onChange={props.onChange}
          />

          <Grid item>
            {props.user.url && props.user.url.includes("user") && (
              <p className="error-msg">{props.user.message}</p>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Grid>

          <Grid item>
            {props.user.id && (
              <p>
                User account is created successfully! You can{" "}
                <Link to="login">login here</Link>
              </p>
            )}
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
