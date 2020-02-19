import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AccountTree from '@material-ui/icons/AccountTree';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

import { t } from '../services/i18n';
import {PATH_HOME, PATH_TALKS, PATH_OPEN_SOURCE, PATH_COURSES} from '../routes';

const RoutedListItem = (props) => (
    <ListItem component={Link} to={props.path} selected={props.location.pathname === props.path} button>
        <ListItemIcon>
            {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.name} />
    </ListItem>
);

export class MainDrawerItems extends React.Component{
    render() {
        // console.log(this.props);
        return  (
            <List>
                <RoutedListItem
                    path={PATH_HOME}
                    name={t('Home')}
                    icon={<HomeIcon/>}
                    location={this.props.location}
                />
                <RoutedListItem
                    path={PATH_TALKS}
                    name={t('Talks')}
                    icon={<RecordVoiceOverIcon/>}
                    location={this.props.location}
                />
                <RoutedListItem
                    path={PATH_OPEN_SOURCE}
                    name={t('Open Source')}
                    icon={<AccountTree/>}
                    location={this.props.location}
                />
                <RoutedListItem
                    path={PATH_COURSES}
                    name={t('Courses')}
                    icon={<LocalLibraryIcon/>}
                    location={this.props.location}
                />

            </List>
        )
    }
}

export const MainDrawerItemsWithRouter = withRouter(MainDrawerItems);
