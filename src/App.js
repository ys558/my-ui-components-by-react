import React from 'react';
import './App.css';

import {Step, Steps} from './components/Steps'
import stepsData from './config/data/steps'

function App () {
  
  return (
    <div className="App">

      {/* 1. Steps步骤，进度条 */}
      <Steps currentStep={1}>
        {
          stepsData.map(
            (item, index) => {
              const {title, status, date} = item
              return <Step ctx={title} status={status} date={date} key={index} />
            }
          )
        }
      </Steps>
    </div>
  );
}

export default App;
