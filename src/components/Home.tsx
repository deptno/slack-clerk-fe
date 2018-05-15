import * as React from 'react'
import {connect} from 'react-redux'
import {RootState} from '../redux'
import {getLinks, LinkState} from '../redux/link'
import {ItemsComponent} from './Items'
import {Tab} from 'semantic-ui-react'
import {TableComponent} from './Table'
import {CardsComponent} from './Cards'

export class HomeComponent extends React.Component<Props, State> {
  render() {
    const panes = [
      {
        menuItem: 'Items',
        render  : () => <Tab.Pane attached={false}><ItemsComponent links={this.props.links || []}/></Tab.Pane>
      },
      {
        menuItem: 'Cards',
        render  : () => <Tab.Pane attached={false}><CardsComponent links={this.props.links || []}/></Tab.Pane>
      },
      {
        menuItem: 'Table',
        render  : () => <Tab.Pane attached={false}><TableComponent links={this.props.links || []}/></Tab.Pane>
      },
    ]

    return (
      <Tab menu={{pointing: true}} panes={panes}/>
    )
  }

  componentDidMount() {
    this.props.getLinks()
  }
}

const mapStateToProps = (state: RootState) => state.link
const mapDispatchToProps = {getLinks}
export const Home = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(HomeComponent)

interface StateProps extends LinkState {
}
type DispatchProps = typeof mapDispatchToProps
interface OwnProps {
}
interface Props extends StateProps, DispatchProps, OwnProps {
}
interface State {
}