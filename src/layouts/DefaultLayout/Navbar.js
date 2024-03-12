import React from "react";
import { Link as RouterLink } from "react-router-dom";
import UlapBizLogo from "src/images/ulapbiz.png";

import {
  Avatar,
  AppBar,
  Toolbar,
  makeStyles,
  Link,
  Box,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: "#fff",
    height: 80,
  },
  appBar: {
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
  biz: {
    color: "#FF7704",
    fontWeight: 900,
  },
  iconContainer: {
    display: "flex",
    gap: ".3em",
    alignItems: "center",
    filter: "grayscale(10%)",
    transition: "all 500ms ease-in-out",
    "&:hover": {
      filter: "grayscale(0)",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} elevation={2} color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters className={classes.toolbar}>
          <Box className={classes.iconContainer}>
            <RouterLink to="/">
              <Avatar src={UlapBizLogo} />
            </RouterLink>
            <Link
              component={RouterLink}
              variant="h3"
              to="/"
              underline="none"
              color="textPrimary"
            >
              Ulap<span className={classes.biz}>Biz</span>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
