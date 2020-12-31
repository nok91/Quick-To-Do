import { useContext } from 'react';
import { TasksContext } from '../../store/tasks.context';

function useDummyTask() {
  const [getTasks, setTask] = useContext(TasksContext);
  let timer;
  const dummyTask = {
    _id: '0',
    title: 'text',
    completed: false,
    idEdit: true
  };

  function reset() {
    setTask([]);
  }

  function addDummy(withAnimation = false) {
    reset();
    if (withAnimation) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setTask([dummyTask]);
      }, 1000);
    } else {
      setTask([dummyTask]);
    }
  }

  function setDummyTask(title) {
    setTask([
      {
        ...dummyTask,
        title
      }
    ]);
  }

  return {
    getTasks,
    addDummy,
    setDummyTask,
    reset
  };
}

export default useDummyTask;
