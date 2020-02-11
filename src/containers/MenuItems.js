import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import {Link} from 'react-router-dom'

import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LayersIcon from '@material-ui/icons/Layers';

import { t } from '../services/i18n';
import {PATH_HOME, PATH_TALKS} from '../routes';


export const mainDrawerItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText primary={t('Home')} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary={t('Talks')} />
    </ListItem>
  </div>
);
