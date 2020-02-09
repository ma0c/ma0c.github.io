import React from 'react'
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Powered by  '}
    <MuiLink color="inherit" href="https://contraslash.com/">
        Contraslash
    </MuiLink>
    </Typography>
);


export default Copyright
