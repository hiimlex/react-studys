import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import axios from "axios";

import Lorem from "../Lorem";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function ListLorems() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list").then(res => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container spacing={3}>
          {data.map(item => (
            <Lorem key={item.id} url={item.download_url} author={item.author} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
