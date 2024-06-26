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
import { StudentData } from './studentsData';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022"),
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022"),
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022"),
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022"),
  createData('Abiodun Kola', "Grade 4", "NGN 400,000", "12 Jan 2022"),
];

export default function StudentTable({data}) {
  return (
    <TableContainer component={Paper} className='table-con'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tableHeader'>
            <TableCell>Student Name</TableCell>
            <TableCell align="center">Class</TableCell>
            <TableCell align="center">Fee</TableCell>
            <TableCell align="center">End Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.students?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='table-text'
            >
                <TableCell component="th" scope="row">
                    {row.studentName}
                </TableCell>
                <TableCell component="th" align="center">{row.grade}</TableCell>
                <TableCell component="th" align="center" className='table-text'><p>{row.period.totalAmountToBePaid}</p></TableCell>
                <TableCell component="th" align="center" className='table-text'>{row.period.proposedEndDate.slice(0,10)}</TableCell>
                <TableCell component="th" align="center" className='actions'>
                  <Link to={`/home/invoice/${row._id}`}>
                    <button className='view-more'>View more info</button>
                  </Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
