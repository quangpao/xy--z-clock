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
      breakTime: 5,
      sessionTime: 25,
      currentState: 'Session'
    }
  }

  render() {
    return (
      <div className='container'>
        
        <div id='title-label'>
          <h1 id='session-length'>{this.state.sessionTime}</h1><h1>&nbsp;-&nbsp;</h1><h1 id='break-length'>{this.state.breakTime}</h1><h1>&nbsp;Clocks</h1>
        </div>

        <div className='row'>

          <div id='break-box' className='box col-2'>
            <span id='break-increment' className='btn'><FontAwesomeIcon icon={solid('caret-up')} size='3x' /></span>
            <div id='break-content'>
              <p id='break-label'>Break</p>
              <img src='img/adolescence-activities-concept-icon-teenager-idea-thin-line-illustration-studying-video-games-skateboarding-isolated-outline-drawing-vector.png'></img>
            </div>
            <span id='break-decrement' className='btn'><FontAwesomeIcon icon={solid('caret-down')} size='3x' /></span>
          </div>

          <div id='timer-box' className='box offset-1 col-6'>
            <p id='timer-label'>{this.state.currentState}</p>
            <div id='timer'>
              <h1 id='time-left'>25:00</h1>
            </div>
            <div id='clicking-button'>
              <span id='start_stop' className='btn'>Start</span>
              <span id='reset' className='btn'><FontAwesomeIcon icon={solid('arrows-rotate')} size='3x' /></span>
            </div>
          </div>

          <div id='session-box' className='box offset-1 col-2'>
            <span id='session-increment' className='btn'><FontAwesomeIcon icon={solid('caret-up')} size='3x' /></span>
            <div id='session-content'>
              <p id='session-label'>Session</p>
              <img src='img/internet-surfing-concept-icon-digital-storage-idea-thin-line-illustration-study-time-isolated-outline-drawing-vector.png'></img>
            </div>
            <span id='session-decrement' className='btn'><FontAwesomeIcon icon={solid('caret-down')} size='3x' /></span>
          </div>

        </div >

      </div>
    )
  }

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
