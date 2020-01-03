import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

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
  const [page, setPage] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=30`
    );

    setData(response.data);
  };

  const randomData = async () => {
    setPage(Math.floor(Math.random() * 11));

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=30`
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Button onClick={randomData} variant="contained">
              random
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {data.map(item => (
            <Lorem key={item.id} url={item.download_url} author={item.author} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
