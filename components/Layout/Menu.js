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
      <div className={`mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 ${this.props.visible ? 'is-visible' : ''} ${s.menu}`} ref={node => (this.root = node)}>
         <header className={`demo-drawer-header ${s.menuHeader}`}>
           <img src={this.props.image} className="demo-avatar" />
         </header>

         <nav className={`demo-navigation mdl-navigation mdl-color--blue-grey-800 ${s.menuNav}`}>
           <Link className="mdl-navigation__link" to="/">
             <i className="fa fa-dollar mdl-color-text--blue-grey-400" aria-hidden="true">_</i>
             <span>Me</span>
           </Link>
           <Link className="mdl-navigation__link" to="/about">
             <i className="fa fa-dollar mdl-color-text--blue-grey-400" aria-hidden="true">_</i>
             <span>Projects</span>
           </Link>
           <Link className="mdl-navigation__link" to="/about">
             <i className="fa fa-dollar mdl-color-text--blue-grey-400" aria-hidden="true">_</i>
             <span>Github stuff</span>
           </Link>

           <div className="mdl-layout-spacer"></div>
           <div className="mdl-layout-spacer"></div>
           <div className="mdl-layout-spacer"></div>
           <div className="mdl-layout-spacer"></div>

           <div className={s.spacer}>
             <div className={s.inline}>
               <a className="mdl-navigation__link" href={this.props.url}>
                  <i className="fa fa-github mdl-color-text--blue-grey-400" aria-hidden="true"></i>
               </a>
               <a className="mdl-navigation__link" href="https://www.linkedin.com/in/josex2r">
                  <i className="fa fa-linkedin mdl-color-text--blue-grey-400" aria-hidden="true"></i>
               </a>
               <a className="mdl-navigation__link" href={`mailto:${this.props.email}`}>
                  <i className="fa fa-envelope mdl-color-text--blue-grey-400" aria-hidden="true"></i>
               </a>
             </div>
           </div>
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
