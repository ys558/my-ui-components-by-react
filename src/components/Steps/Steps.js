import React from 'react';
import './Steps.css'

const Steps = (props) => {
  const {currentStep} = props
  return (
    <div>
      {
        React.Children.map(props.children, (child, index) =>{
          // const length = React.Children.count(props.children)
          return React.cloneElement(child, { index, currentStep })
        })
      }
    </div>
  )
}


const Step = (props) => {
  const { ctx, status, date, index, currentStep } = props
  return (
    <div className='steps-container'>
      123
      <div className='steps-tail'></div>
      <div className='steps-icon'></div>
      <div className='steps-content'></div>
    </div>
  )
}


export {Step, Steps}
