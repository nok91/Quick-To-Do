import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createTask } from '..';
import { TasksContext } from '../../store/tasks.context';

function useCreateTask() {
  const queryClient = useQueryClient();
  const [, setTask] = useContext(TasksContext);
  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('task-list');
      setTask([]);
    }
  });
}

export default useCreateTask;
