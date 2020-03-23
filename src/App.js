import React, {useState} from 'react';
import './App.css';

// 进度条: Steps
import {Step, Steps, StepsByData} from './components/Steps'
import stepsData from './config/data/steps'

// 弹框: Modals
import Modal from './components/Modal/Modal';

// 标签页: Tabs
import Tabs  from './components/Tabs/Tabs'
import BindData from './components/BindData';

function App () {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      {/* 1. Steps步骤，进度条, 两种调用方式: */}
      {/* 1.1 自行解决: 
      <Steps currentStep='2'>
        <Step ctx={title} status />
        <Step />
      </Steps> */}
      {/* <Steps currentStep={stepsData.findIndex(i=> i.status === 'current')}>
        {
          stepsData.map((item, index) => {
              const {title, status, date} = item
              return <Step ctx={title} status={status} date={date} key={index} />
            })
        }
      </Steps> */}
      {/* <hr/> */}
      {/* 2. 直接塞数据, 须要调用StepsByDat进行传参, 数据格式的字段须符合:
      [{ ctx: 'xxx', status: 'yyy', date: 'yyy'}], 
        其中status为必选项, 分'reached','current','not reach'; 其他两个为可选项,
      */}
      {/* { StepsByData(stepsData) }
      <hr/> */}


      {/* 2. modal弹框: */}
      {/* <button onClick={()=> setOpenModal(!openModal)}>
        openModal
      </button>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
      /> */}

      {/* 3. tab选项卡: */}
      <Tabs>
        <div title="Tab 1">
            标签1内容
        </div>
        <div title="Tab 2">
            标签2内容
        </div>
        <div title="Tab 3">
            标签3内容
        </div>
      </Tabs>

      {/* <BindData/> */}
    </div>
  );
}

export default App;
