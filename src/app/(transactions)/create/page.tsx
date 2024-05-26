"use client"
import React, { useState, ChangeEvent } from 'react';
import { Container, Typography, TextField, FormControlLabel, Radio, RadioGroup, Button, Grid } from '@mui/material';
import BasicDatePicker from '../../components/DatePicker';
import BasicTimePicker from '../../components/TimePicker';

const TransactionPage = () => {
  const [instructionType, setInstructionType] = useState<'immediate' | 'standing'>('immediate');
  const [totalTransferRecord, setTotalTransferRecord] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleInstructionTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInstructionType(event.target.value as 'immediate' | 'standing');
  };

  const handleTotalTransferRecordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTotalTransferRecord(event.target.value);
  };

  const handleTransferAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTransferAmount(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Transaction Page
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RadioGroup row value={instructionType} onChange={handleInstructionTypeChange}>
            <FormControlLabel value="immediate" control={<Radio />} label="Immediate Instruction" />
            <FormControlLabel value="standing" control={<Radio />} label="Standing Instruction" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Total Transfer Record"
            value={totalTransferRecord}
            onChange={handleTotalTransferRecordChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Transfer Amount"
            value={transferAmount}
            onChange={handleTransferAmountChange}
          />
        </Grid>
        {instructionType === 'standing' && (
          <>
            <Grid item xs={12}>
              <BasicDatePicker />
            </Grid>
            <Grid item xs={12}>
              <BasicTimePicker />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TransactionPage;
