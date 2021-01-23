import React from 'react';
import AppHeader from '../appHeader';
import {InfoPage, ShopPage} from '../pages';
import AppFooter from '../appFooter';
import ModalEnter from '../modalEnter';
import Map from '../map';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  state = {
    openModal: false,
    openMap: false
  }

onOpen = () => {
  this.setState({openModal: true});
}

onClose = () => {
  this.setState({openModal: false});
}

onOpenMap = () => {
  this.setState({openMap: true});
}

onCloseMap = () => {
  this.setState({openMap: false});
}

  render() {
    const modal = this.state.openModal ? <ModalEnter onClose={this.onClose}/> : null;
    const map = this.state.openMap ? <Map onCloseMap={this.onCloseMap}/> : null;

    return (
      <>
        <Router>
          <AppHeader onOpen={this.onOpen}/>
          <Switch>
            <Route path='/shop' component={ShopPage} />
            <Route path='/' render={() => <InfoPage onOpenMap={this.onOpenMap}/>} />
          </Switch>
          <AppFooter />
          {modal}
          {map}
        </Router>
      </>
    )
  }
}

export default App;