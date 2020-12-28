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
      console.log({ withAnimation });
      timer = setTimeout(() => {
        setTask([dummyTask]);
        console.log('setTask');
      }, 1000);
    } else {
      setTask([dummyTask]);
    }
  }

  return {
    getTasks,
    addDummy,
    reset
  };
}

export default useDummyTask;
