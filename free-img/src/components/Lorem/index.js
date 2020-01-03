import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 20
  },
  media: {
    height: 220
  }
});

export default function Lorem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.url} />
        <p>{props.author}</p>
      </Card>
    </Grid>
  );
}
