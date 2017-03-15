import React, { Component } from 'react';
import './App.css';


class TextToggle extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isToggled: 'Hello Portland'
    }

  }


  render() {
    return (
      <div className="Test-test">
        <span>{this.state.isToggled}
        </span>

      </div>
    );
  }
}
export default TextToggle;
