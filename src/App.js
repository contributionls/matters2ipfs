import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  CssBaseline,
  Container
} from "@material-ui/core";
import { ImportExport } from "@material-ui/icons";
import { GithubCircle } from "mdi-material-ui";
import Home from "./Home";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    margin: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link color="inherit" href="/">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <ImportExport />
              </IconButton>
            </Link>
            <Link color="inherit" href="/">
              <Typography variant="h6" className={classes.title}>
                Convert config online
              </Typography>
            </Link>
            <div className={classes.grow} />
            <Link
              href="https://github.com/contributionls/utils"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              className={classes.link}
            >
              <IconButton color="inherit" aria-label="Github">
                <GithubCircle />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Home />
        </Container>
      </div>
    </React.Fragment>
  );
}
