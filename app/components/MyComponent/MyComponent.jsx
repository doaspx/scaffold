import React, { Component } from 'react';

import './MyComponent.css';

class MyComponent extends Component {
  render() {
    return (
      <h1 className="demo">
        <span className="glyphicon glyphicon-th"></span>
        更多产品请访问
        <span className="glyphicon glyphicon-plane"></span>
      </h1>
    );
  }
}

export default MyComponent;
