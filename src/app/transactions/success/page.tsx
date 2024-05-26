import React from 'react';
import { Container, Typography, Button, Grid, Box, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type SuccessProps = {
  totalTransferRecord: string;
  transferAmount: string;
  fromAccountNo: string;
  instructionType: string;
  transferType: string;
  referenceNo: string;
}

const SuccessPage: React.FC<SuccessProps> = ({
  totalTransferRecord,
  transferAmount,
  fromAccountNo,
  instructionType,
  transferType,
  referenceNo
}) => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <CheckCircleIcon style={{ color: 'green', fontSize: 60 }} />
        <Typography variant="h5" gutterBottom>
          Submitted Successfully, waiting for review
        </Typography>
        <Typography variant="subtitle2" gutterBottom color="GrayText">
          The transfer application will be invalidated on 23:59, please notify approver for review in time
        </Typography>
        <Paper variant="outlined" sx={{ padding: '32px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Total Transfer Record:</Typography>
              <Typography variant="body1">{totalTransferRecord}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Total Transfer Amount:</Typography>
              <Typography variant="body1">{transferAmount}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">From Account No:</Typography>
              <Typography variant="body1">{fromAccountNo}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Instruction Type:</Typography>
              <Typography variant="body1">{instructionType}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Transfer Type:</Typography>
              <Typography variant="body1">{transferType}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Reference No:</Typography>
              <Typography variant="body1">{referenceNo}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Grid item xs={12}>
          <Box textAlign="center" mt={3}>
            <Button variant="contained" color="primary">
              Done
            </Button>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default SuccessPage;
