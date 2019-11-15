import * as React from "react";
import "../../assets/styles.css";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../assets/boxes.css";

function AdForm(props) {
  return !localStorage.getItem("jwt") ? (
    <Redirect to={"/login"}></Redirect>
  ) : (
    <form onSubmit={props.onSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className="create-event-container"
      >
        <Grid item xs={12}>
          <h3>SELL ITEM</h3>
        </Grid>

        <TextField
          className="box"
          label="Title"
          margin="dense"
          variant="outlined"
          type="text"
          name="title"
          value={props.values.title}
          onChange={props.onChange}
        />

        <TextField
          className="box"
          label="Image Url"
          margin="dense"
          variant="outlined"
          type="text"
          name="url"
          value={props.values.url}
          onChange={props.onChange}
        />

        <TextField
          className="box"
          label="Description"
          margin="dense"
          variant="outlined"
          type="text"
          name="description"
          value={props.values.description}
          onChange={props.onChange}
        />

        <TextField
          className="box"
          label="Price"
          margin="dense"
          variant="outlined"
          type="number"
          name="price"
          value={props.values.price}
          onChange={props.onChange}
        />

        <TextField
          className="box"
          label="Email"
          margin="dense"
          variant="outlined"
          type="text"
          name="email"
          value={props.values.email}
          onChange={props.onChange}
        />

        <TextField
          className="box"
          label="Phone"
          margin="dense"
          variant="outlined"
          type="number"
          name="phoneNumber"
          value={props.values.phoneNumber}
          onChange={props.onChange}
        />

        {!props.editMode ? (
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        ) : (
          <Button variant="contained" type="submit">
            Update
          </Button>
        )}
      </Grid>
    </form>
  );
}

export default AdForm;
