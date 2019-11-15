import * as React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../../assets/styles.css';

export default function LoginForm(props) {
  return (
    <div>
      {localStorage.getItem('jwt') && <Redirect to={'/'}></Redirect>}

      <form onSubmit={props.onSubmit} noValidate autoComplete="off">
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          className="login-container"
        >
          <Grid item xs={12}>
            <h4>Start selling/making an offer by logging in</h4>
          </Grid>

          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
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

          <Grid item xs={12}>
            {props.user.url && props.user.url.includes('api/login') && (
              <p className="error-msg">{props.user.message}</p>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Grid>

          <Grid item xs={12}>
            <p>
              Don't have an account yet? <Link to="signup">Signup here</Link>
            </p>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
