"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CheckIcon from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert'
import TransactionOverview from '../ui/TransactionOverview';
import ListTransaction from '../ui/ListTransactions';
import { TableViewOutlined } from '@mui/icons-material';
import Link from 'next/link';

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Box display="flex" flex="1" alignItems="center" justifyContent="right">
            <Typography variant="body1" color="inherit" onClick={() => { }} sx={{ cursor: 'pointer', marginRight: 2 }}>
              Logout
            </Typography>
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
          </Box >
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <ListItem sx={{ justifyContent: 'center', }}>
          <Typography marginTop="32px" fontSize="32px" fontWeight="bold">BNC</Typography>
        </ListItem>
        <Toolbar />
        <Divider />
        <List>
          <>
            {[
              { text: 'Home', icon: <HomeIcon />, link: '/' },
              { text: 'Create Transaction', icon: <TableViewOutlined />, link: '/transactions/create' },
              { text: 'Transaction List', icon: <HomeIcon />, link: '/' },
              // Add more items as needed
            ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <Link href="/" style={{ display: 'flex', textDecoration: 'none' }}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </>
        </List>
      </Drawer >
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Alert sx={{ mb: 2 }} icon={<CheckIcon fontSize="inherit" />} severity="info">
          Last time Login 20 May, 2024 10:29:14
        </Alert>

        <TransactionOverview />
        <ListTransaction />

      </Box>
    </Box >
  );
}

export default Dashboard