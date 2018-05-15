import * as React from 'react'
import {Link} from '../redux/link'
import {Icon, Item as _Item} from 'semantic-ui-react'

const noPhoto = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'

export class Item extends React.Component<P, S> {
  render() {
    const data = this.props.data
    const meta = data.meta || {} as Link['meta']
    const date = new Date(data.timestamp * 1000).toISOString()

    return (
      <_Item>
        <_Item.Image size='small' src={meta.image || noPhoto}/>
        <_Item.Content>
          <_Item.Header as='a'>{meta.title || meta.siteName || data.url}</_Item.Header>
          <_Item.Meta>
            <span className='date'>{date}</span>
          </_Item.Meta>
          <_Item.Description>{meta.description}</_Item.Description>
          <_Item.Extra>
            {/*<Icon color='green' name='pin'/>*/}
            <a href={data.url} target="_blank">
              <Icon color='green' name='safari'/> {data.url}
            </a>
          </_Item.Extra>
        </_Item.Content>
      </_Item>
    )
  }
}
interface P {
  data: Link
}
interface S {

}

