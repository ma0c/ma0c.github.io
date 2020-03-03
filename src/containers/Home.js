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
import SvgIcon from '@material-ui/core/SvgIcon';


import { t } from '../services/i18n';

import Copyright from '../components/Copyright';

import photo from '../static/img/photo.jpeg';
import mediumSVG from '../static/img/medium-seeklogo.com.svg'
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
                  <Grid item xs={1}>
                      <a href="https://medium.com/@ma0collazos">
                          <SvgIcon src={mediumSVG} fontSize="small">
                              <g id="surface1">
<rect x="0" y="0" width="20" height="20" style={{"fill":"rgb(7.058824%,6.27451%,5.490196%)","fillOpacity":"1","stroke":"none"}}/>
<path style={{"stroke":"none","fillRule":"nonzero","fill":"rgb(100%,100%,100%)","fillOpacity":"1"}} d="M 4.773438 6.6875 C 4.789062 6.523438 4.726562 6.359375 4.601562 6.25 L 3.347656 4.738281 L 3.347656 4.511719 L 7.242188 4.511719 L 10.253906 11.117188 L 12.902344 4.511719 L 16.617188 4.511719 L 16.617188 4.738281 L 15.542969 5.765625 C 15.449219 5.835938 15.40625 5.953125 15.421875 6.066406 L 15.421875 13.625 C 15.40625 13.738281 15.449219 13.855469 15.542969 13.925781 L 16.589844 14.953125 L 16.589844 15.179688 L 11.320312 15.179688 L 11.320312 14.953125 L 12.40625 13.898438 C 12.511719 13.792969 12.511719 13.761719 12.511719 13.597656 L 12.511719 7.492188 L 9.496094 15.15625 L 9.089844 15.15625 L 5.574219 7.492188 L 5.574219 12.628906 C 5.546875 12.84375 5.617188 13.0625 5.769531 13.214844 L 7.179688 14.929688 L 7.179688 15.15625 L 3.179688 15.15625 L 3.179688 14.929688 L 4.589844 13.214844 C 4.742188 13.058594 4.808594 12.839844 4.773438 12.628906 Z M 4.773438 6.6875 "/>
</g>
                          </SvgIcon>
                      </a>
                  </Grid>

                <Copyright />
              </Grid>
            </Container>
  )
};

export default Home;
