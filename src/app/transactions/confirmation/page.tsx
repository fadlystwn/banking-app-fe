import React from 'react';
import { Container, Typography, Button, Grid, Box, Divider } from '@mui/material';

type ConfirmationProps = {
  totalTransferRecord: string;
  transferAmount: string;
  fromAccountNo: string;
  instructionType: string;
}

const ConfirmationPage: React.FC<ConfirmationProps> = ({
  totalTransferRecord,
  transferAmount,
  fromAccountNo,
  instructionType
}) => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" gutterBottom>
          Confirmation Page
        </Typography>
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
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1">From Account No:</Typography>
            <Typography variant="body1">{fromAccountNo}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Instruction Type:</Typography>
            <Typography variant="body1">{instructionType}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <Button variant="contained" color="primary" fullWidth>
                Confirm
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ConfirmationPage;
