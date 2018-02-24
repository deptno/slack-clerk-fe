import * as React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import {Button, Welcome} from '@storybook/react/demo'
import {LinksComponent} from '../components/Links'
import {thunk} from './mock/action'

import * as links from './data/links.json'

storiesOf('Component', module)
  .add('Links', () => <LinksComponent getLinks={() => thunk('getLinks')} links={links} />)

