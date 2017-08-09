import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountDownTimer from './CountDownTimer';
import helpers from '../../helpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1500,
      interval: 0
    }
  }

  render() {
    const appStyle = {
      textAlign: 'center'
    };

    const appTitleStyle = {
      color: 'red'
    };

    return (
      <div style={appStyle}>
        <p style={appTitleStyle}>pomodoro</p>
        <CountDownTimer time={helpers.formatTime(this.state.time)} interval={this.state.interval} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
