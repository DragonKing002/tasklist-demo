
import React from 'react';
import { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid, Paper } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import MainContainer from './components/MainContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paperFrom: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 'auto',
    cursor: 'pointer'
  },
  rowHover: {
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#e4f1f7',
    },
  },
  pausedRow: {
    backgroundColor: '#e4f1f7',
  },
}));


const StyledTableCell = withStyles(() => ({
  root: {
    fontSize: 20,
    height: 100,
  },
}))(TableCell);

function App() {

  const classes = useStyles();
  const [pausedRow, setPausedRow] = useState(null);
  const [indexFlow, setIndexFlow] = useState(0);

  const rows = [
    { FlowName: 'Register the passenger', StartDate: '2020-12-09 12:23:24' },
    { FlowName: 'Check payment', StartDate: '2020-12-09 12:23:24' },
    { FlowName: 'Task A', StartDate: '2020-12-09 12:23:24' },
    { FlowName: 'Register the passenger', StartDate: '2020-12-09 12:23:24' },
  ];

  const handleRowClick = (index) => {

    console.log(index);
    setPausedRow(index);
    setIndexFlow(index);
  };

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Tasklist
            </Typography>
            <Typography variant="subtitle1">
              Welcome, Jumphon Kaewsehawong!
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={4}>

          <TableContainer component={Paper} className={classes.paperFrom}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.FlowName}
                    className={`
              ${classes.rowHover} 
              ${pausedRow === index && classes.pausedRow}
            `}
                    onClick={() => handleRowClick(index)}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.FlowName}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.StartDate}</StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paperFrom}>
            <MainContainer indexFlow={indexFlow} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
