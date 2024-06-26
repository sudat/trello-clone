import React from 'react'
import {v4 as uuid} from 'uuid'

export const TaskAddInput = ({
    inputText,
    setInputText,
    taskList,
    setTaskList
}) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if(inputText ===""){
      return;
    }
    setTaskList([
      ...taskList,
      {
        id:taskId,
        draggableId:`task-${taskId}`,
        text:inputText,
      },
    ]);
    setInputText("");
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="taskAddInput" 
          type="text" 
          placeholder='add a task'
          value={inputText}
        />
      </form>
    </div>
  )
}
