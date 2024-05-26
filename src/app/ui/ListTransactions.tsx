import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Box, Typography, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import DetailTransactionModal from './Modal';

const tableData = [
  { referenceNo: 'REF123', totalTransferAmount: '100000', totalTransferRecord: 2, fromAccountNo: 'ACC123', maker: 'John Doe', transferDate: '2024-05-26', operation: 'View' },
  // Add more data as needed
];

const tableHeaders = [
  'Reference No',
  'Total Transfer Amount (Rp)',
  'Total Transfer Record',
  'From Account No',
  'Maker',
  'Transfer Date',
  'Operation'
];

function ListTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);


  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenModal = (row: any) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box marginTop={3}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell key={index}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{header}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.referenceNo}</TableCell>
              <TableCell>{row.totalTransferAmount}</TableCell>
              <TableCell>{row.totalTransferRecord}</TableCell>
              <TableCell>{row.fromAccountNo}</TableCell>
              <TableCell>{row.maker}</TableCell>
              <TableCell>{row.transferDate}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenModal(row)}>
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Items per page:"
      />
      <DetailTransactionModal open={openModal} onClose={() => setOpenModal(false)} selectedRow={selectedRow} />
    </Box>
  );
}

export default ListTable;
