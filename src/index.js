import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import reportWebVitals from './reportWebVitals';
import './index.scss';

class Timer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      breakTime: this.props.breakTime,
      sessionTime: this.props.sessionTime,
      currentState: 'Session',  
      currentTimer: 1500,
      intervalId: null
    }

    this.handleCounting = this.handleCounting.bind(this)

  }

  countingDown = () => {
    console.log(this.state.currentTimer)
    if (this.state.currentTimer === 0 && this.state.currentState === 'Break') {
      clearInterval(this.state.intervalId)
      return;
    }
    if (this.state.currentTimer === 0 && this.state.currentState === 'Session') {
      clearInterval(this.state.intervalId)
      this.setState({
        currentTimer: this.state.breakTime * 60,
        currentState: 'Break'
      })
      this.handleCounting()
      return;
    }

    this.resetHandle = this.resetHandle.bind(this)
    this.breakIncreaseHandle = this.breakIncreaseHandle.bind(this)
    this.breakDecreaseHandle = this.breakDecreaseHandle.bind(this)
    this.sessionIncreaseHandle = this.sessionIncreaseHandle.bind(this)
    this.sessionDecreaseHandle = this.sessionDecreaseHandle.bind(this)
  }

  resetHandle() {
    this.setState({

      breakTime: this.props.breakTime,
      sessionTime: this.props.sessionTime,
      currentState: 'Session'

    })
  }

  breakIncreaseHandle() {
    const breakTime = this.state.breakTime 
    if (breakTime < 60) {
      this.setState({
        breakTime: breakTime + 1
      })
    }
  }

  sessionIncreaseHandle() {
    const sessionTime = this.state.sessionTime 
    if (sessionTime < 60) {
      this.setState({
        sessionTime: sessionTime + 1
      })
    }
  }

  breakDecreaseHandle() {
    const breakTime = this.state.breakTime 
    if (breakTime > 0) {
      this.setState({
        breakTime: breakTime - 1
      })
    }
  }

  sessionDecreaseHandle() {
    const sessionTime = this.state.sessionTime 
    if (sessionTime > 0) {
      this.setState({
        sessionTime: sessionTime - 1
      })
    }
    this.setState({
      currentTimer: this.state.currentTimer - 1
    })
  }

  handleCounting = () => {
    this.setState({
      intervalId: setInterval(this.countingDown, 1000)
    })
  }

  render() {

    const minutes = Math.floor(this.state.currentTimer / 60)
    const seconds = this.state.currentTimer % 60
    console.log(minutes, seconds)
    console.log(this.props.breakTime)
    console.log(this.props.sessionTime)
    console.log(this.state.breakTime)
    console.log(this.state.sessionTime)
    return (
      <div className='container'>
        
        <div id='title-label'>
          <h1 id='session-length'>{this.state.sessionTime}</h1><h1>&nbsp;-&nbsp;</h1><h1 id='break-length'>{this.state.breakTime}</h1><h1>&nbsp;Clocks</h1>
        </div>

        <div className='row'>

          <div id='break-box' className='box offset-1 col-2'>
            <span id='break-increment' className='btn' onClick={this.breakIncreaseHandle}><FontAwesomeIcon icon={solid('caret-up')} size='3x' /></span>
            <div id='break-content'>
              <p id='break-label'>Break</p>
              <img src='img/adolescence-activities-concept-icon-teenager-idea-thin-line-illustration-studying-video-games-skateboarding-isolated-outline-drawing-vector.png'></img>
            </div>
            <span id='break-decrement' className='btn' onClick={this.breakDecreaseHandle}><FontAwesomeIcon icon={solid('caret-down')} size='3x' /></span>
          </div>

          <div id='timer-box' className='box col-6'>
            <p id='timer-label'>{this.state.currentState}</p>
            <div id='timer'>
              <h1 id='time-left'>{minutes}:{seconds < 10 ? '0' + seconds : seconds}</h1>
            </div>
            <div id='clicking-button'>
              <span id='start_stop' className='btn' onClick={this.handleCounting}>Start</span>
              <span id='reset' className='btn' onClick={this.resetHandle}><FontAwesomeIcon icon={solid('arrows-rotate')} size='3x' /></span>
            </div>
          </div>

          <div id='session-box' className='box col-2'>
            <span id='session-increment' className='btn' onClick={this.sessionIncreaseHandle}><FontAwesomeIcon icon={solid('caret-up')} size='3x' /></span>
            <div id='session-content'>
              <p id='session-label'>Session</p>
              <img src='img/internet-surfing-concept-icon-digital-storage-idea-thin-line-illustration-study-time-isolated-outline-drawing-vector.png'></img>
            </div>
            <span id='session-decrement' className='btn' onClick={this.sessionDecreaseHandle}><FontAwesomeIcon icon={solid('caret-down')} size='3x' /></span>
          </div>

        </div>

      </div>
    )
  }

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer breakTime={5} sessionTime={25}/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
