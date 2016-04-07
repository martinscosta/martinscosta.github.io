import React from 'react';
import ReactDOM from 'react-dom';

import MainNavBar from '../components/MainNavBar';
import Alerta from '../components/Alerta';

export default class App extends React.Component {
  
  render() {
    return (
      <div className='container'>
        <MainNavBar></MainNavBar>
        <h2>Aqui é o Container App</h2>
        <Alerta titulo="Alerta" texto="Um teste" />
      </div>
    )
  }
  
  
}