import React from "react";
import PropTypes from "prop-types";
// @mui/material components
import { makeStyles } from "@mui/material/styles";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/typographyStyle.js";

export default function Info(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}

Info.propTypes = {
  children: PropTypes.node,
};
