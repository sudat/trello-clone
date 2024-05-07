import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("today");


  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  };
  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
    console.log(inputCardTitle);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };
  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
      {isClick ?
        <form onSubmit={handleSubmit}>
          <input 
            className="taskCardTitleInput"
            type="text"
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={inputCardTitle} 
            autoFocus 
            maxLength="10" />
        </form>
        :
        <h2>{inputCardTitle}</h2>
      }

    </div>
  )
}
