import React from "react";

import Button from "@material-ui/core/Button";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import useStyles from "../styles/FooterStyles";

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="primary" className={classes.footer}>
      <Toolbar className={classes.footerIcons}>

        <div>
          <Button
            href="https://github.com/covid19india/api"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.button}
            endIcon={<OpenInNewIcon />}
          >
            API
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
