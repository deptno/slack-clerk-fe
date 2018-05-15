import * as React from 'react'
import {ItemGroup} from 'semantic-ui-react'
import {Item} from './Item'
import {Link} from '../redux/link'

export class ItemsComponent extends React.Component<P, S> {
  render() {
    const links = this.props.links
    return (
      <ItemGroup>
        {links.map((link, i) => <Item key={i} data={link}/>)}
      </ItemGroup>
    )
  }
}

interface P {
  links: Link[]
}
interface S {}

