import React from 'react'
    import Option from './Option';
    const Options = (props) => {
  return (
    <div>
    <div className="widget-header">
    <h3>Your Options</h3>
      <button className='button button--link' onClick={props.handleDeleteOptions}>Remove All</button></div>
      {props.options.length === 0 && <p className="add">Please add an option to get started!</p>}
      {
        props.options.map((option,index) => (
          <Option
            key={index}
            count={index+1}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

export default Options