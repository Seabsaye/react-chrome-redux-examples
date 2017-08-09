import React, {Component} from 'react';
import {connect} from 'react-redux';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      color: 'blue'
    }

    return (
      <div>
        <p style={style}>{this.props.time}</p>
      </div>
    );
  }
};

export default CountdownTimer;
