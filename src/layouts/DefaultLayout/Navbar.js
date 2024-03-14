import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import UlapBizLogo from "src/images/ulapbiz.png";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import {
  Avatar,
  AppBar,
  Toolbar,
  makeStyles,
  Link,
  Box,
  Container,
  Button,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const pages = [
  "Home",
  "Plans",
  "Accounting and Beyond",
  "Features",
  "Schedules and Reports",
  "Contact Us",
  "Sign In",
  "Sign Up",
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: "#fff",
    height: 60,
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
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
    },
    "&:hover": {
      filter: "grayscale(0)",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar elevation={2} color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters className={classes.toolbar}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.up('md')]: {
              justifyContent: "start",
              gap: "2rem",
            },
            alignItems: "center",
            width: "100%",
          }}>
            <Box className={classes.iconContainer}>
              <RouterLink to="/">
                <Avatar src={UlapBizLogo} />
              </RouterLink>
              <Link
                component={RouterLink}
                variant="h4"
                to="/"
                underline="none"
                color="textPrimary"
              >
                Ulap<span className={classes.biz}>Biz</span>
              </Link>
            </Box>
            {isXs && <Box>
              {open ?
                <CloseIcon color="primary" onClick={() => setOpen(false)} /> :
                <MenuIcon color="primary" onClick={() => setOpen(true)} />}
            </Box>}
            <Box sx={{
              display: "flex",
              gap: "1rem",
              "& :hover": {
                color: "#FF7704",
              }
            }}>
              {!isXs && pages.map((page, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  variant="h6"
                  to={`/${page.toLowerCase().replace(" ", "-")}`}
                  underline="none"
                  color="textPrimary"
                  style={{
                    fontSize: ".8rem",
                  }}
                >
                  {page}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
        {isXs &&
          <Collapse in={open}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: "1rem",
              marginBottom: "1rem",
              height: "100vh",
            }}>
              {pages.map((page, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  variant="h6"
                  to={`/${page.toLowerCase().replace(" ", "-")}`}
                  underline="none"
                  color="primary"
                >
                  {page}
                </Link>
              ))}
            </Box>
          </Collapse>
        }
      </Container>
    </AppBar >
  );
};

export default Navbar;
