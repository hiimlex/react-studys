import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  Icon,
  Box
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 20
  },
  media: {
    height: 300
  }
});

export default function Lorem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.url} />
        <CardActions className={classes.cardactions}>
          <Grid justify="space-between" container>
            <Grid item>
              <Box mt={1} ml={2}>
                <Typography
                  variant="h6"
                  component="p"
                  className={classes.margin}
                >
                  By {props.author}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <IconButton color="default" target="_blank" href={props.url}>
                <Icon>get_app</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
