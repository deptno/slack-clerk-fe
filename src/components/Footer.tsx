import * as React from 'react'
import {Icon, List} from 'semantic-ui-react'

export const Footer: React.SFC<{}> = props => {
  return (
    <footer>
      <List>
        <List.Content>
          <a href={'https://gihtub.com/deptno/slack-clerk'}>
            <Icon name="github"/> backend
          </a>
        </List.Content>
        <List.Content>
          <a href={'https://gihtub.com/deptno/slack-clerk-fe'}>
            <Icon name="github"/> frontend
          </a>
        </List.Content>
      </List>
    </footer>
  )
}
