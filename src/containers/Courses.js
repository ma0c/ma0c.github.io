import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardHeader, Container, Typography} from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import { t } from '../services/i18n';

import courses from '../services/dataProvider/courses'


export default  class Courses extends React.Component {

    createCard = (course) => {
        const {classes} = this.props;
        return (
            <Box component="span" m={1} key={course.id}>
                <Card className={classes}>
                    <CardHeader
                        title={course.title}
                    />
                    <CardContent>
                         <Typography variant="body2" color="textSecondary" component="p">
                             <ReactMarkdown source={course.description} />
                         </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"  href={course.web}>
                            {t('Page')}
                        </Button>
                        <Button size="small"  href={course.repo}>
                            {t('Repo')}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        )
    };

    render() {
        const {courses} = this.props;
        const coursesCards = courses.map(talk => this.createCard(talk));
        return (
            <Container>
                {coursesCards}
            </Container>
        )
    }

};

Courses.defaultProps = {
    courses: courses
};
