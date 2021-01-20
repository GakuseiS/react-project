import React from 'react';
import AppHeader from '../appHeader';
import { ShopPage} from '../pages';
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
        <AppHeader onOpen={this.onOpen}/>
        {/* <InfoPage onOpenMap={this.onOpenMap}/> */}
        <ShopPage />
        <AppFooter />
        {modal}
        {map}
      </>
    )
  }
}

export default App;