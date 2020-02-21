import React from 'react'

import {
  Avatar,
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
              <Grid container my={5} justify="center" alignContent="center" alignItems="center" direction="column">
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3"   >
                        {t('Mauricio Collazos')}
                    </Typography>
                </Grid>
                  <Grid item xs={12} alignSelf="center" alignContent="center">
                      <Avatar alt="Mauricio Collazos" src={photo} className={classes.largePicture} alignSelf="center"  />
                  </Grid>
                  <Grid item xs={12}>
                      <Typography variant="body1">
                          {t('Master Student in Computer Science at Universidad del Valle. Software engineer, system administrator and speech technologies researcher')}
                      </Typography>
                  </Grid>
                <Copyright />
              </Grid>
            </Container>
  )
};

export default Home;
