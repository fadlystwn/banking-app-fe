import React from 'react';
import { Modal, Box, Typography, Grid } from '@mui/material';
import ModalTransactionTable from './ModalTransactionTable';

type DetailTransactionModalProps = {
  open: boolean;
  onClose: () => void;
  selectedRow: any;
}

const DetailTransactionModal: React.FC<DetailTransactionModalProps> = ({ open, onClose, selectedRow }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        width: 800,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
          Transaction Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">From Account No:</Typography>
            <Typography>{selectedRow && selectedRow.fromAccountNo}</Typography>
            <Typography variant="subtitle1">Submit Date and Time:</Typography>
            <Typography>{selectedRow && selectedRow.submitDateTime}</Typography>
            <Typography variant="subtitle1">Transfer Date:</Typography>
            <Typography>{selectedRow && selectedRow.transferDate}</Typography>
            <Typography variant="subtitle1">Instruction Type:</Typography>
            <Typography>{selectedRow && selectedRow.instructionType}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Maker:</Typography>
            <Typography>{selectedRow && selectedRow.maker}</Typography>
            <Typography variant="subtitle1">Reference No:</Typography>
            <Typography>{selectedRow && selectedRow.referenceNo}</Typography>
            <Typography variant="subtitle1">Transfer Type:</Typography>
            <Typography>{selectedRow && selectedRow.transferType}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Transfer
          </Typography>
          <Typography gutterBottom>
            Total Amount: {selectedRow && selectedRow.totalAmount}
          </Typography>
          <Typography>
            Estimated Service Fee: {selectedRow && selectedRow.serviceFee}
          </Typography>
          <ModalTransactionTable selectedRow={selectedRow} />
        </Grid>
      </Box>
    </Modal>
  );
}

export default DetailTransactionModal;
