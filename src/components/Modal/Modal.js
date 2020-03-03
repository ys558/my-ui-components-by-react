import React from 'react'
import './Modal.scss'

const Modal = (props) =>{
  const {openModal, setOpenModal} = props
  return <>
  {openModal ?
  (<div className='opened-modal'>
    <div className='modal-position'>
      <div className='mask'></div>
      <div className='modal-wrap'>
        <div className='modal-content'>
          <header>
            title
          </header>
          3333333322222222222222222222222222
          <footer>
            <button onClick={()=>{setOpenModal(!openModal)}}>x</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
  )
  :
    null
  }
  </>
}

export default Modal