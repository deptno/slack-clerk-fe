import * as React from 'react'
import {Icon, List} from 'semantic-ui-react'
import * as pack from '../../package.json'

export const Footer: React.SFC<{}> = props => {
  return (
    <footer>
      <List>
        <List.Content>
          <a href={'https://github.com/deptno/slack-clerk'}>
            <Icon name="github"/> backend
          </a>
        </List.Content>
        <List.Content>
          <a href={'https://github.com/deptno/slack-clerk-fe'}>
            <Icon name="github"/> frontend
          </a>
          @{pack.version}
        </List.Content>
      </List>
    </footer>
  )
}
