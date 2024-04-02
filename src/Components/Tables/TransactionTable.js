import * as React from 'react';
import "./StudentTable.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('First term', "Grade 4", "NGN 400,000", "12 Jan 2022", "01/41"),
  createData('First term', "Grade 4", "NGN 400,000", "12 Jan 2022", "02/41"),
  createData('First term', "Grade 4", "NGN 400,000", "12 Jan 2022", "03/41"),
  createData('First term', "Grade 4", "NGN 400,000", "12 Jan 2022", "04/41"),
  createData('First term', "Grade 4", "NGN 400,000", "12 Jan 2022", "05/41"),
];

export default function TransactionTable() {
  return (
    <TableContainer component={Paper} className='table-con'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tableHeader'>
            <TableCell>Term</TableCell>
            <TableCell align="center">Class</TableCell>
            <TableCell align="center">Fee</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Paid In</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='table-text'
            >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell component="th" align="center">{row.calories}</TableCell>
                <TableCell component="th" align="center" className='table-text'><p>{row.fat}</p></TableCell>
                <TableCell component="th" align="center" className='table-text'>{row.carbs}</TableCell>
                <TableCell component="th" align="center" className='actions'>
                  {row.protein}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}