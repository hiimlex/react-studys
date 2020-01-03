import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appbar: {
    alignItems: "center",
    background: "#795548"
  },
  title: {
    fontWeight: "bold"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={2} style={{ margin: 0 }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Just a sample of Lorem Picsum
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
