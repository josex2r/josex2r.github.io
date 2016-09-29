/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: props.menuVisible || false
    };
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  open() {
    this.setState({ visible: true });
  }

  close() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className={`mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 ${this.state.visible ? 'is-visible' : ''}`} ref={node => (this.root = node)}>
         <header className="demo-drawer-header">
           <img src="images/user.jpg" className="demo-avatar" />
           <div className="demo-avatar-dropdown">
             <span>hello@example.com</span>
             <div className="mdl-layout-spacer"></div>
             <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
               <i className="material-icons" role="presentation">arrow_drop_down</i>
               <span className="visuallyhidden">Accounts</span>
             </button>
             <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect">
               <li className="mdl-menu__item">hello@example.com</li>
               <li className="mdl-menu__item">info@example.com</li>
               <li className="mdl-menu__item"><i className="material-icons">add</i>Add another account...</li>
             </ul>
           </div>
         </header>
         <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
           <Link className="mdl-navigation__link" to="/">
             <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>
             Home
           </Link>
           <Link className="mdl-navigation__link" to="/about">
             <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">info</i>
             About
           </Link>
           <div className="mdl-layout-spacer"></div>
           <Link className="mdl-navigation__link" to="/about">
             <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i>
             Help
           </Link>
         </nav>
       </div>
    );
  }

}

export default Menu;
