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
import Button from '../../components/Button';

class Layout extends React.Component {
  render() {
    return (
      <div className="" ref={node => (this.root = node)}>
        <Button primary={true} type="icon" colored={true} accent={true} ripple={true}>
          <i className={`fa fa-${this.props.icon}`} aria-hidden="true"></i>
        </Button>
        <span>{this.props.label}</span>
      </div>
    );
  }
}

export default Layout;
