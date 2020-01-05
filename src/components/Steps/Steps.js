import React from 'react';
import './Steps.scss'

const Steps = (props) => {
  const { currentStep } = props
  return (
    <div className='steps'>
      {
        React.Children.map(props.children, (child, index) => {
          const length = React.Children.count(props.children)
          return React.cloneElement(child, { index, currentStep, length })
        })
      }
    </div>
  )
}


const Step = (props) => {
  const { ctx, status, date, index, currentStep, length } = props
  console.log(props)
  return (
    <div className='step-container'>
      {stepIcon(status)}
      {stepTail(index, length, currentStep)}
      <div className='step-content'>
        <div className='step-content-title'>{date}</div>
        <div className='step-content-description'>{ctx}</div>
      </div>
    </div>
  )
}

const stepIcon = (status) => {
  if (status === 'reached'){
    return <>
          <div className='step-icon'>{' '}</div>
      </>
  }else if(status === 'current'){
    return <>
          <div className='step-icon-current'>{' '}</div>
      </>
  }else if(status === 'not reach'){
    return <>
          <div className='step-icon-not-reach'>{' '}</div>
      </>
  }
}

const stepTail = (index, length, currentStep) => {
  return <>
    {
      index < currentStep ?
        <div className='step-tail'></div>
        :
        <div className={`step-tail-not-reach${index + 1 === length ? '-last' : ''}`}></div>
    }
  </>
}


export { Step, Steps }
