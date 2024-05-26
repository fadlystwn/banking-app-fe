import React from 'react';
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

type ModalTransactionTableProps = {
  selectedRow: any;
}

const ModalTransactionTable: React.FC<ModalTransactionTableProps> = ({ selectedRow }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>To Account No</TableCell>
            <TableCell>To Account Name</TableCell>
            <TableCell>To Account Bank</TableCell>
            <TableCell>Transfer Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Map over transaction details and render rows */}
          {/* For demonstration, rendering one row */}
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>{selectedRow && selectedRow.toAccountNo}</TableCell>
            <TableCell>{selectedRow && selectedRow.toAccountName}</TableCell>
            <TableCell>{selectedRow && selectedRow.toAccountBank}</TableCell>
            <TableCell>{selectedRow && selectedRow.transferAmount}</TableCell>
            <TableCell>{selectedRow && selectedRow.status}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ModalTransactionTable;
