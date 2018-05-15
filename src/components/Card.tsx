import * as React from 'react'
import {Link} from '../redux/link'
import {Card as _Card, Icon, Image} from 'semantic-ui-react'

const noPhoto = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'

export class Card extends React.Component<P, S> {
  render() {
    const data = this.props.data
    const meta = data.meta
    const date = new Date(data.timestamp).toISOString()

    if (!meta) {
      return <_Card href={data.url} header={data.url} meta={date} description="no metadata" />
    }
    return (
      <_Card href={data.url}>
        <Image src={meta.image || noPhoto} />
        <_Card.Content>
          <_Card.Header>{meta.title||meta.siteName||meta.url}</_Card.Header>
          <_Card.Meta>{date}</_Card.Meta>
          <_Card.Description>{meta.description||''}</_Card.Description>
        </_Card.Content>
        <_Card.Content extra>
          <a>
            <Icon name='safari' />
            {data.url}
          </a>
        </_Card.Content>
      </_Card>
    )
  }
}
interface P {
  data: Link
}
interface S {

}

