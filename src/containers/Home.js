import React from 'react'

import {
  Avatar,
  Box,
  Grid,
  Container,
  Typography,
} from '@material-ui/core';


import { t } from '../services/i18n';

import Copyright from '../components/Copyright';

import photo from '../static/img/photo.jpeg'
import {useStyles} from '../styles';

const Home = () => {
    const classes = useStyles();
  return (
            <Container maxWidth="sm">
              <Box my={4} justifyContent="center" alignContent="center" alignItems="center">
                <Typography variant="h3" component="h3" gutterBottom>
                    {t('Mauricio Collazos')}
                </Typography>
                  <Avatar alt="Mauricio Collazos" src={photo} className={classes.largePicture} />
                  <Typography variant="body1">
                      {t('Master Student in Computer Science at Universidad del Valle. Software engineer, system administrator and speech technologies researcher')}
                  </Typography>
                <Copyright />
              </Box>
            </Container>
  )
};

export default Home;
