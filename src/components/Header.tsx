import * as React from 'react'
import {Header as SHeader} from 'semantic-ui-react'

export const Header: React.SFC<{}> = props => (
  <SHeader size="huge">
    <h1>
      Clerk, <small>링크 저장소</small>
    </h1>
  </SHeader>
)
