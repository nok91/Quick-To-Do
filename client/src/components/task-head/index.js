import React from 'react';
import TaskHeadEdit from './components/task-head-edit';
// import TaskHeadView from './components/task-head-view';

function TaskHead() {
  return (
    <>
      {/* <TaskHeadView /> */}
      <TaskHeadEdit />
    </>
  );
}

TaskHead.displayName = 'TaskHead';

export default TaskHead;
