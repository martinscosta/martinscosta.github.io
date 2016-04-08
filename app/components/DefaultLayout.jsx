/**
 * Page layout, reused across multiple Page components
 */

import React from 'react';
import { canUseDOM } from '../helpers';

import MainNavBar from '../components/MainNavBar.jsx';

export default class DefaultLayout extends React.Component {

  componentDidMount() {
    if (canUseDOM) {
      document.title = this.props.title;
    }
  }  
  
  render() {
    return (
      <div className='container'>
        <MainNavBar />
        <div className="l-content">
          <h3>{this.props.title}</h3>
          {this.props.children}
        </div>
        <div className="l-footer">
          <p>Copyright (c) 2016 Marco Martins Costa</p>
        </div>
      </div>
    );
  }

}

DefaultLayout.propTypes = {
    title: React.PropTypes.string
};
