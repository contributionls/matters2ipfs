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
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight:"100vh",
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
  },
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    backgroundColor: 'white',
    backgroundColor: "#f2f2f2",
    borderTop: "1px solid #e4e4e4",
    lineHeight: 40
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="md">
          <Home />
        </Container>
        <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Github</Typography>
          <Typography variant="body1">Docs</Typography>

        </Container>
      </footer>
      </div>
    </React.Fragment>
  );
}
