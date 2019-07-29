import React, { useState } from "react";
import {
  Button,
  TextField,
  FormGroup,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Link,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  ListItemIcon,
  ListItemAvatar,
  CircularProgress,
  IconButton,
  Divider,
  Snackbar,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FileFind,CheckCircle, ContentCopy,Delete as DeleteIcon,Folder as FolderIcon } from "mdi-material-ui";
import {HighlightOff,ImportExport} from '@material-ui/icons'
import { getExtname, api, isValidUrl } from "./utils";
import SnackBarContentWrapper from "./components/SnackBarContent";

import "./Home.css";
const HOST = process.env.REACT_APP_API_HOST
  ? process.env.REACT_APP_API_HOST
  : "";
const MAIN_HOST = process.env.REACT_APP_MAIN_HOST
  ? process.env.REACT_APP_MAIN_HOST
  : "";
const allowTypes = [".yaml", ".yml", ".json", ".ini"];

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 30
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  buttonGrow: {
    flexGrow: 1
  },
  buttonBox: {},
  input: {
    display: "none"
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  formControl: {
    marginRight: theme.spacing(4),
    minWidth: 120
  },
  listItem:{
    wordBreak:'break-all'
  },
  buttonSplit: {
    flex: 1
  },
  legend: {
    color: "rgba(0, 0, 0, 0.38)"
  },
  loading: {
    margin: theme.spacing(4),
    display: "flex",
    justifyContent: "center"
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  close: {
    padding: theme.spacing(0.5)
  },
  error: {
    backgroundColor: "red"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  buttonRight: {
    marginLeft: theme.spacing(4)
  },
  space: {
    marginLeft: theme.spacing(1)
  },
  priButton: {
    justifyContent: "flex-end"
  },
  center:{
    display:'flex',
    justifyContent: "center",
    alignItems:"center"
  },
  centerButton:{
    marginTop:theme.spacing(4),
    justifyContent: "center"

  }
}));

export default function Home() {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const getUrlError = url => {
    return !isValidUrl(url);
  };
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [urlError, setUrlError] = useState(getUrlError(url));
  const [errorMessage, setErrorMessage] = useState("test");
  const handleChangeUrl = e => {
    setUrl(e.target.value);
  };
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  function handleCloseError(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  }
  const handleConvert = () => {};
  const handleClickRandom = () => {
    const newUrl =
      "https://matters.news/@leungkaichihk/%E9%A6%99%E6%B8%AF%E7%AC%AC%E4%B8%80%E8%AA%B2-%E7%B0%A1%E4%BB%8B%E5%8F%8A%E7%9B%AE%E9%8C%84-zdpuB2J818r8yUSDeZ4vDARrnQ4ut3S2UYjALXHJ16jp25w4P";

    setUrl(newUrl);
  };
  return (
    <div className={classes.root}>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Convert{" "}
            <Link
              href="https://matters.news"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matters
            </Link>{" "}
            to{" "}
            <Link
              href="https://contributionls.github.io/public-gateway-checker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IPFS
            </Link>
          </Typography>
        </Container>
      </div>
      <FormGroup>
        <TextField
          id={`url`}
          required
          label={`Matters Article Url`}
          type="url"
          placeholder="Please input your config url here"
          onChange={handleChangeUrl.bind(null)}
          value={url}
          variant="outlined"
          margin="normal"
          error={urlError}
          helperText={urlError ? "URL is invalid!" : ""}
        />
        <FormGroup row className={classes.centerButton}>
          <Button
            onClick={handleConvert.bind(null)}
            color="primary"
            size="large"
            variant="outlined"
            disabled={isLoading}
            className={`${classes.button}`}
          >
            {isLoading ? (
              <CircularProgress
                size={20}
                color="inherit"
                className={classes.buttonIcon}
              />
            ) : null}
            <ImportExport fontSize="small" className={classes.buttonIcon} />
            Convert
          </Button>
          <Button
          onClick={handleClickRandom}
          variant="outlined"
          color="default"
          size="large"
          className={`${classes.button} ${classes.buttonRight}`}
        >
          Example
        </Button>
        </FormGroup>
        <Divider className={classes.divider} />
        <div>
          <List dense={false}>
            <ListItem>
              <ListItemAvatar className={classes.center}>
                  <HighlightOff color="error"></HighlightOff>
              </ListItemAvatar>
              <ListItemText
              primaryTypographyProps={{
                className:classes.listItem
              }}
                primary="https://d26g9c7mfuzstv.cloudfront.net/ipfs/QmTgP4LgbnhWc6etMzbbqJq5ayRxk1AEpB9Nq3yEcdBgQG/"
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <ContentCopy />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
      
          </List>
        </div>
      </FormGroup>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <SnackBarContentWrapper
          onClose={handleClose}
          variant="success"
          message="The url has be copied!"
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={openError}
        autoHideDuration={1500}
        onClose={handleCloseError}
      >
        <SnackBarContentWrapper
          onClose={handleCloseError}
          variant="error"
          message={errorMessage}
        />
      </Snackbar>
    </div>
  );
}
