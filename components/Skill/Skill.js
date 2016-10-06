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
import s from './Skill.css';

class Layout extends React.Component {
  render() {
    const progressClass = `progress${this.props.progress}`;

    return (
      <div className={`col-xs-12 col-md-6 ${s.padding}`} ref={node => (this.root = node)}>
        <div className={s.skillButton}>
          <i className={`fa fa-${this.props.icon}`} aria-hidden="true"></i>
        </div>
        <div className={`progress ${s.progress}`}>
          <div className={`progress-bar ${s.percent} ${s[progressClass]}`} role="progressbar" aria-valuenow={this.props.progress} aria-valuemin="0" aria-valuemax="5"></div>
        </div>
      </div>
    );
  }
}

export default Layout;
