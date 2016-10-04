/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { connect } from 'react-redux';
import React from 'react';
import Link from '../Link';
import s from './Menu.css';

const mapStateToProps = (state, ownProps) => state.user;

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.state)
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className={`mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 ${this.props.visible ? 'is-visible' : ''}`} ref={node => (this.root = node)}>
         <header className={`demo-drawer-header ${s.menuHeader}`}>
           <img src={this.props.image} className="demo-avatar" />
           <div className="demo-avatar-dropdown">
             <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
             <i className="fa fa-envelope" aria-hidden="true"></i>
           </div>
           <div className="demo-avatar-dropdown">
             <a href="https://github.com/josex2r">{this.props.user}</a>
             <i className="fa fa-github" aria-hidden="true"></i>
           </div>
         </header>
         <nav className={`demo-navigation mdl-navigation mdl-color--blue-grey-800 ${s.menuNav}`}>
           <Link className="mdl-navigation__link" to="/">
             <i className="fa fa-user-plus mdl-color-text--blue-grey-400 material-icons" aria-hidden="true"></i>
             Me
           </Link>
           <Link className="mdl-navigation__link" to="/about">
             <i className="fa fa-cube mdl-color-text--blue-grey-400 material-icons" aria-hidden="true"></i>
             Projects
           </Link>
           <div className="mdl-layout-spacer"></div>
           <Link className="mdl-navigation__link" to="/about">
             <i className="fa fa-gears mdl-color-text--blue-grey-400 material-icons" aria-hidden="true"></i>
             Github stuff
           </Link>
         </nav>
       </div>
    );
  }

}

export default connect(
  mapStateToProps,
  null,
  null,
  { withRef: true }
)(Menu);
