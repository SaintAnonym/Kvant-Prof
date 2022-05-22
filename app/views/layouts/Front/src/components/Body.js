import React from "react";
import Grid from "@mui/material/Grid";
import MediaCard from "./Card1";
import MediaCard1 from "../components/card2";
import "../styles/styles.css";

export default function App() {
  return (
    <div className="body">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnGap={15}
        rowGap={5}
        m={7}
      >
        <MediaCard />
        <MediaCard1 />
      </Grid>
    </div>
  );
}
