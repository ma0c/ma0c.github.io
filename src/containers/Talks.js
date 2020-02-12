import React from 'react';
import {Box, Card, CardContent, CardHeader, Container, Typography} from '@material-ui/core';
import {useStyles} from '../styles';

import talks from '../services/dataProvider/talks'


export default  class Talks extends React.Component {

    createCard = (talk) => {
        const {classes} = this.props;
        return (
            <Box component="span" m={1} key={talk.id}>
                <Card className={classes}>
                    <CardHeader
                        title={talk.title}
                        subheader={talk.date}
                    />
                    <CardContent>
                         <Typography variant="body2" color="textSecondary" component="p">
                             {talk.description}
                         </Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    };

    render() {
        const {talks} = this.props;
        const cards = talks.map(talk => this.createCard(talk));
        return (
            <Container>
                {cards}
            </Container>
        )
    }

};

Talks.defaultProps = {
    talks: talks
};
