import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appbar:{
    alignItems: "center",
    background: "#795548"
  }
})

export default function Header() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6">
            Just a sample of Lorem Picsum
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

