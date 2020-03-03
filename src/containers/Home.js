import React from 'react'

import {
  Avatar,
  Grid,
  Container,
  Typography,
} from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


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
                          {t('Estudiante de Maestria en Ingenieria con Enfasis en Ingenieria de Sistemas y Computacion en la universidad del valle, Desarrollador de Software Full Stack (Django/React), administrador de sistemas e investigador en Procesamiento de Voz')}
                      </Typography>
                      <Typography variant="body1">
                          {t('')}
                      </Typography>
                  </Grid>

                  <Grid item xs={1}>
                      <a href="http://twitter.com/ma0collazos">
                          <TwitterIcon fontSize="small"/>
                      </a>
                  </Grid>
                  <Grid item xs={1}>
                      <a href="http://linkedin.com/in/mauricio-collazos">
                          <LinkedInIcon fontSize="small"/>
                      </a>
                  </Grid>
                  <Grid item xs={1}>
                      <a href="http://github.com/ma0c">
                          <GitHubIcon fontSize="small"/>
                      </a>
                  </Grid>
                  <Grid item xs={1}>
                      <a href="mailto:ma0@contraslash.com">
                          <EmailIcon fontSize="small"/>
                      </a>
                  </Grid>

                <Copyright />
              </Grid>
            </Container>
  )
};

export default Home;
