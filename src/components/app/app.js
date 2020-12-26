import React from 'react';
import AppHeader from '../appHeader';
import {InfoPage} from '../pages';
import AppFooter from '../appFooter';
import ModalEnter from '../modalEnter';

class App extends React.Component {
  state = {
    openModal: false
  }

onOpen = () => {
  this.setState({openModal: true});
}

onClose = () => {
  this.setState({openModal: false});
}

  render() {
    const modal = this.state.openModal ? <ModalEnter onClose={this.onClose}/> : null;
    return (
      <>
        <AppHeader onOpen={this.onOpen}/>
        <InfoPage />
        <AppFooter />
        {modal}
      </>
    )
  }
}

export default App;