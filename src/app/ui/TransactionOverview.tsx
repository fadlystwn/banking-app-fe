import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const transactionData = [
  { title: 'Awaiting Approval', count: 0 },
  { title: 'Successfully', count: 0 },
  { title: 'Rejected', count: 0 }
];

function TransactionOverview() {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Transaction Overview
      </Typography>
      <Grid container spacing={3}>
        {transactionData.map((data, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {data.title}
                </Typography>
                <Typography color="textSecondary">
                  {data.count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TransactionOverview;
