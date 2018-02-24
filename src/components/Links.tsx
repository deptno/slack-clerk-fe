import * as React from 'react'
import {connect} from 'react-redux'
import {RootState} from '../redux'
import {getLinks, LinkState} from '../redux/link'
import {Icon, Loader, Table} from 'semantic-ui-react'

export class LinksComponent extends React.Component<P, S> {
  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>링크</Table.HeaderCell>
            <Table.HeaderCell>날짜</Table.HeaderCell>
            <Table.HeaderCell>시간</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{
          this.props.links
            ? this.props.links.map(link => {
              const date = new Date(link.timestamp * 1000)
              return (
                <Table.Row key={link.url}>
                  <Table.Cell>
                    <Icon name="external share"/>
                    <a href={link.url} target="_blank">{link.url}</a>
                  </Table.Cell>
                  <Table.Cell>
                    {date.toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    {date.toLocaleTimeString()}
                  </Table.Cell>
                </Table.Row>
              )
            })
            : (
              <Table.Row>
                <Table.Cell colSpan={3}>
                  <Loader active inline='centered'/>
                </Table.Cell>
              </Table.Row>
            )
        }</Table.Body>
      </Table>
    )
  }

  componentDidMount() {
    this.props.getLinks()
  }
}
export const Links = connect<S, D, O>(
  (state: RootState) => {
    return state.link
  },
  {
    getLinks
  }
)(LinksComponent)

interface S extends LinkState {

}
interface D {
  getLinks: typeof getLinks
}
interface O {

}
type P = S & D & O
interface S {

}

