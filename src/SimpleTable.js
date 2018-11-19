import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Download from "@material-ui/icons/GetApp";
import IconButton from "@material-ui/core/IconButton";
import SimpleModal from "./SimpleModal";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  input: {
    display: "none"
  }
};

let id = 0;
function createData(name, date, dURL) {
  id += 1;
  return { id, name, date, dURL };
}

const data = [
  createData(
    "August 2018 Monthly Report",
    "01 September 2018 13:45:20",
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  ),
  createData(
    "September 2018 Monthly Report",
    "01 October 2018 13:45:20",
    "Download"
  ),
  createData(
    "October 2018 Monthly Report",
    "01 November 2018 13:45:20",
    "Download"
  )
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date Added</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  <SimpleModal />
                  <a id="icon-button-file" href={n.dURL} download>
                    {n.name}
                  </a>
                </TableCell>
                <TableCell>{n.date}</TableCell>
                <TableCell>
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      className={classes.button}
                      component="span"
                    >
                      <a id="icon-button-file" href={n.dURL} download>
                        <Download />
                      </a>
                    </IconButton>
                  </label>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
