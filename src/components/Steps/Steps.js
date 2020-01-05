import React from 'react';
import './Steps.scss'

const Steps = (props) => {
  const {currentStep} = props
  return (
    <div className='steps'>
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
    <div className='step-container'>
        <div className='step-icon'>{' '}</div>
        <div className='step-tail'></div>
        <div className='step-content'>content</div>
    </div>
  )
}


export {Step, Steps}
