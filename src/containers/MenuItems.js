import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom'

import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LayersIcon from '@material-ui/icons/Layers';

import { t } from '../services/i18n';
import {PATH_HOME, PATH_TALKS} from '../routes';


export class MainDrawerItems extends React.Component{
    render() {
        // console.log(this.props);
        return  (
            <List>
                <ListItem component={Link} to={PATH_HOME} selected={this.props.location.pathname === PATH_HOME} button>
                    <ListItemIcon>
                        <GroupWorkIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('Home')} />
                </ListItem>
                <ListItem component={Link} to={PATH_TALKS} selected={this.props.location.pathname === PATH_TALKS} button>
                    <ListItemIcon>
                        <LayersIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('Talks')} />
                </ListItem>
            </List>
        )
    }
}

export const MainDrawerItemsWithRouter = withRouter(MainDrawerItems);
