'use client'
import React from 'react';
import {
  TextField, Button,
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const initialValues = {
    corporateAccountNumber: '',
    corporateName: '',
    userId: '',
    username: '',
    role: '',
    phoneNumber: '',
    email: '',
    password: '',
  };

  const onSubmit = (values: any) => {
    console.log('Submitted values:', values);
  };

  return (
    <Container
      maxWidth="xs"
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ m: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          Registration
        </Typography>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {() => (
            <Form>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="corporateAccountNumber"
                label="Corporate Account Number"
                name="corporateAccountNumber"
                autoFocus
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="corporateName"
                label="Corporate Name"
                name="corporateName"
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userId"
                label="User ID"
                name="userId"
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
              <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default RegistrationPage;
