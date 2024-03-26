import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import randy from "../images/ulapbiz.png";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import backed from "../images/orange bg.jpg";

const useStyles = makeStyles({
  root: {
    height: "100rem",
  },
  container: { position: "absolute", top: "20%", left: "42%" },
  feature: {
    height: "10rem",
  },

  c1: {
    position: "absolute",
    top: "200%",
    left: "100%",
    transformStyle: "preserve-3d",
    transform: "skewY(2deg)",
    border: "2px solid black",
    borderRadius: "50px",
  },
  c2: {
    position: "absolute",
    top: "370%",
    right: "100%",
    transformStyle: "preserve-3d",
    transform: "skewY(-3deg)",
    border: "2px solid black",
    borderRadius: "50px",
  },
  c3: {
    position: "absolute",
    top: "540%",
    left: "100%",
    transformStyle: "preserve-3d",
    transform: "skewY(3deg)",
    border: "10px solid grey",
    borderRadius: "50px",
  },
  c4: {
    position: "absolute",
    top: "740%",
    right: "100%",
    transformStyle: "preserve-3d",
    transform: "skewY(-5deg)",
    border: "10px solid grey",
    borderRadius: "50px",
  },
  bg: {
    height: "100%",
    width: "auto",
    overflow: "hidden",
    position: "fixed",
    zIndex: -1,
  },
});
export default function UlapDistribution() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={backed} className={classes.bg} />
      <div className={classes.container}>
        <img
          src={randy}
          style={{
            height: "20rem",
          }}
        />
        <Typography align="center" variant="h3" className={classes.tagline}>
          <Box
            fontFamily={"Poppins"}
            fontWeight={900}
            fontSize={35}
            style={{ color: "F0F0F0" }}
          >
            ULAP<span style={{ color: "#ff7704" }}> DISTRIBUTION</span>
          </Box>
        </Typography>
        <div>
          <img
            src={one}
            className={classes.c1}
            style={{
              height: "30rem",
              width: "40rem",
            }}
          />
        </div>
        <div>
          <img
            src={two}
            className={classes.c2}
            style={{
              height: "30rem",
              width: "40rem",
            }}
          />
        </div>
        <div>
          <img
            src={three}
            className={classes.c3}
            style={{
              height: "30rem",
              width: "40rem",
            }}
          />
        </div>
        <div>
          <img
            src={four}
            className={classes.c4}
            style={{
              height: "30rem",
              width: "40rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
