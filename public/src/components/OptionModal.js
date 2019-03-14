import React from 'react'
import Modal from 'react-modal'
const OptionModal=(props)=>{
return(
    <div>
    <Modal className="modal" closeTimeoutMS={200} onRequestClose={props.clear} isOpen={!!props.selectedOption} contentLabel="Selected Option">
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.clear}>ok</button>

    </Modal>
  
    </div>
)
}

export default OptionModal