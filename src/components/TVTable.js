import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TVTable = ( {model} ) => {
  const keys = Object.keys(model);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">      
        <TableHead>
          {keys.map((k) => (
            <TableRow key={k}>
              <TableCell>{k}</TableCell>
              <TableCell align="right">{model[k]}</TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
    </TableContainer>
  );
}

TVTable.defaultProps = {
  model: {}
}

export default TVTable

