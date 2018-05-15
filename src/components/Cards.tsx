import * as React from 'react'
import {Link} from '../redux/link'
import {CardGroup} from 'semantic-ui-react'
import {Card} from './Card'

export class CardsComponent extends React.Component<P, S> {
  render() {
    const links = this.props.links
    return (
      <CardGroup>
        {links.map(link => <Card data={link}/>)}
      </CardGroup>
    )
  }
}

interface P {
  links: Link[]
}
interface S {}
