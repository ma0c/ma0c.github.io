import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardHeader, Container, Typography} from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import { t } from '../services/i18n';

import openSource from '../services/dataProvider/open_source'


export default  class OpenSource extends React.Component {

    createCard = (openSourceProject) => {
        const {classes} = this.props;
        return (
            <Box component="span" m={1} key={openSourceProject.id}>
                <Card className={classes}>
                    <CardHeader
                        title={openSourceProject.title}
                    />
                    <CardContent>
                         <Typography variant="body2" color="textSecondary" component="p">
                             <ReactMarkdown source={openSourceProject.description} />
                         </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"  href={openSourceProject.url}>
                            {t('Repo')}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        )
    };

    render() {
        const {openSource} = this.props;
        const openSourceProjects = openSource.map(talk => this.createCard(talk));
        return (
            <Container>
                {openSourceProjects}
            </Container>
        )
    }

};

OpenSource.defaultProps = {
    openSource: openSource
};
