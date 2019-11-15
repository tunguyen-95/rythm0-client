import * as React from 'react';
import { Link } from 'react-router-dom';
import AdForm from '../AdForm/AdForm';
import '../../assets/styles.css';
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Button,
  TextField
} from '@material-ui/core/';

function AdDetails(props) {
  if (!props.ad) return 'Loading ad data...';

  return props.editMode ? (
    <AdForm
      editMode={props.editMode}
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      values={props.formValues}
    />
  ) : (
    <div>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
        className="ad-details"
      >
        <Grid item xs={12} sm={6} lg={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={props.ad.title}
                height="140"
                image={props.ad.url}
                title={props.ad.title}
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className="info">
          <h2>{props.ad.title}</h2>
          <p>Description: {props.ad.description}</p>
          <p>Price: €{props.ad.price}</p>
          <p>Email: {props.ad.email}</p>
          {props.ad.phoneNumber && <p>Phone number: {props.ad.phoneNumber}</p>}

          {localStorage.getItem('email') === props.ad.email && (
            <div>
              <Grid item>
                <Button onClick={props.onEdit}>Edit</Button>
                <Button onClick={props.onDelete}>Delete</Button>
              </Grid>
            </div>
          )}

          {/* Only display in full mode after login */}
          {localStorage.getItem('jwt') &&
            localStorage.getItem('email') !== props.ad.email && (
              <div>
                <TextField
                  id="outlined-dense"
                  className="bid"
                  type="number"
                  margin="dense"
                  variant="outlined"
                />

                {/* Deactivate after user click on it */}
                {!localStorage.getItem('offerMade') ? (
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    className="bid-btn"
                    onClick={props.handleMakeOfferSubmit}
                  >
                    Make offer
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    disabled
                    className="bid-btn"
                    onClick={props.handleMakeOfferSubmit}
                  >
                    Make offer
                  </Button>
                )}

                {localStorage.getItem('offerMade') && (
                  <p>
                    <i>You made an offer to the seller!</i>
                  </p>
                )}
              </div>
            )}

          {!localStorage.getItem('jwt') && (
            <Link to={`/login`}>
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                className="bid-btn"
              >
                Make offer
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default AdDetails;
