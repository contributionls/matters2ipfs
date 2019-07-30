import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {

  Typography,
  Link,
  CssBaseline,
  Container
} from "@material-ui/core";
import Home from "./Home";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: "100vh",
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
  space: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  footer: {  
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "#f2f2f2",
    borderTop: "1px solid #e4e4e4",
    lineHeight: 40
  },
  flex: {
    display: "flex",
    flexWrap:'wrap',
    justifyContent: "center"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <div className="sharethis-inline-share-buttons" style={{padding:10}} />
        <Container maxWidth="md">
          <Home />
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="md">
            <div className={classes.flex}>
              <Typography variant="body2" className={classes.space}>
                <Link
                  color="textSecondary"
                  href="https://github.com/contributionls/matters2ipfs"
                >
                  Github
                </Link>
              </Typography>

              <Typography variant="body2" className={classes.space}>
                <Link
                  color="textSecondary"
                  href="https://github.com/contributionls/matters2ipfs/blob/master/README.md#getting_started"
                >
                  Docs
                </Link>
              </Typography>
              <Typography variant="body2" className={classes.space}>
                <Link
                  color="textSecondary"
                  href="https://github.com/contributionls/matters2ipfs/issues"
                >
                  Feedback
                </Link>
              </Typography>
              <Typography variant="body2" className={classes.space}>
                <Link
                  color="textSecondary"
                  href="https://github.com/contributionls/matters2ipfs/blob/master/Terms.md"
                >
                  Terms of Use
                </Link>
              </Typography>
              <Typography variant="body2" className={classes.space}>
                <Link
                  color="textSecondary"
                  href="https://github.com/contributionls/matters2ipfs/issues/new"
                >
                  Submit Gateway
                </Link>
              </Typography>
              <Typography variant="body2" className={classes.space}>
              <Link
                color="textSecondary"
                href="https://matters.news/@deserve"
              >
                Follow Me
              </Link>
            </Typography>
            </div>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  );
}
