/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Menu from './Menu';
import Footer from '../Footer';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false
    };
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  handleMenuClick(menuVisible) {
    this.setState({ menuVisible });
  }

  render() {
    return (
      <div className="mdl-layout__container" ref={node => (this.root = node)}>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer is-upgraded is-small-screen">
          <Header menuVisible={this.state.menuVisible} onMenuClick={this.handleMenuClick.bind(this, true)} />
          <Menu visible={this.state.menuVisible} path={this.props.path} />
          <main className="mdl-layout__content">
            <div {...this.props} className={cx(s.content, this.props.className)} />
            <Footer />
          </main>
          <div className={`mdl-layout__obfuscator ${this.state.menuVisible ? 'is-visible' : ''}`} onClick={this.handleMenuClick.bind(this, false)}></div>
        </div>
      </div>
    );
  }
}

export default Layout;
