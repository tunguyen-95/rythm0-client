import React from "react";
import "../../assets/styles.css";
import { Link } from "react-router-dom";
import {
  CardMedia,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent
} from "@material-ui/core";

function AdList(props) {
  const { ads } = props;

  return (
    <div>
      <Grid
        container
        justify="center"
        direction="column"
        className="search-container"
      >
        <Grid item xs={12} md={6} sm={3} lg={4}>
          <Typography variant="h2" className="promotion">
            UP
            <br />
            T0
            <br />
            25% OFF
            <br />
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
        spacing={2}
        className="ad-list"
      >
        {ads &&
          ads.map(ad => (
            <Grid key={ad.id} item xs={12} md={4} sm={6} lg={4}>
              <Link to={`/ad/${ad.id}`}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={ad.title}
                      height="140"
                      image={ad.url}
                      title={ad.title}
                    />
                    <CardContent>
                      <h3>{ad.title}</h3>
                      <p>€{ad.price}</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default AdList;
