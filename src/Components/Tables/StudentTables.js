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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022", 0),
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022", 1),
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022", 2),
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022", 2),
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022", 2),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className='table-con'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tableHeader'>
            <TableCell>Student Name</TableCell>
            <TableCell align="left">Class</TableCell>
            <TableCell align="left">Fee</TableCell>
            <TableCell align="left">Due Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="center">Action</TableCell>
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
              <TableCell component="th" align="left">{row.calories}</TableCell>
              <TableCell component="th" align="left" className='table-text'><p>{row.fat}</p></TableCell>
              <TableCell component="th" align="left" className='table-text'>{row.carbs}</TableCell>
              <TableCell component="th" align="left">
                {(row.protein === 0) && (
                    <div className='paid'>
                        <p>Paid</p>
                    </div>
                )}
                 {(row.protein === 1) && (
                    <div className='due'>
                        <p>Due</p>
                    </div>
                )}
                 {(row.protein === 2) && (
                    <div className='pending'>
                        <p>Pending</p>
                    </div>
                )}
                </TableCell>
                <TableCell component="th" align="center" className='actions'>
                    <div className="actions">
                        <div className="action-icons">
                            <FiEdit/>
                        </div>
                        <div className="action-icons">
                            <RiDeleteBinLine/>
                        </div>
                    </div>
                    
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}