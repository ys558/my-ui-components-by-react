import React, {useState} from 'react';
import './App.css';

import {Step, Steps} from './components/Steps'
import stepsData from './config/data/steps'
import Modal from './components/Modal/Modal';

function App () {
  const [openModal, setOpenModal] = useState(false)
  const [fruit, setFruit] = useState('banana')
  const [fruits, setFruits] = useState(['apple', 'pineapple'])
  return (
    <div className="App">

      {/* 1. Steps步骤，进度条 */}
      <Steps currentStep={stepsData.findIndex(i=> i.status === 'current')}>
        {
          stepsData.map(
            (item, index) => {
              const {title, status, date} = item
              return <Step ctx={title} status={status} date={date} key={index} />
            }
          )
        }
      </Steps>
      <br/>
      <hr/>
      {/* <p>选择的水果: {fruit}</p>
      <ul>
        {fruits.map(f => {
          console.log(f)
          return <li key={f} onClick={()=> setFruit(f)}>{f}</li>
        })}
      </ul> */}

      <button onClick={()=> setOpenModal(!openModal)}>
        openModal
      </button>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}

export default App;
