import React from 'react'
import clsx from 'clsx';

import {
  AppBar,
  Box,
  Badge,
  CssBaseline,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
  Toolbar,
} from '@material-ui/core';


import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { t } from '../services/i18n';

import Copyright from '../components/Copyright';
import { mainDrawerItems } from "../containers/MenuItems";
import { useStyles } from "../styles";


/* Inspired on https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/Dashboard.js */



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },

  }
});

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                {t('Mauricio Collazos')}
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
              variant="permanent"
              classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainDrawerItems}</List>

          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="sm">
              <Box my={4}>
                <Typography variant="h1" component="h1" gutterBottom>
                  {t('page_name')}
                </Typography>


                <Copyright />
              </Box>
            </Container>
          </main>


        </div>
      </ThemeProvider>
  )
};

export default Home
