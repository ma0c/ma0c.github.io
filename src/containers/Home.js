import React from 'react'

import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';


import { t } from '../services/i18n';

import Copyright from '../components/Copyright';

const Home = () => {
  return (
            <Container maxWidth="sm">
              <Box my={4}>
                <Typography variant="h1" component="h1" gutterBottom>
                  {t('page_name')}
                </Typography>
                <Copyright />
              </Box>
            </Container>
  )
};

export default Home;
