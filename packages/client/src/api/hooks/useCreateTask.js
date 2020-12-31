import { useMutation, useQueryClient } from 'react-query';
import { createTask } from '..';
import useDummyTask from './useDummyTask';

function useCreateTask() {
  const queryClient = useQueryClient();
  const { addDummy } = useDummyTask();

  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('task-list');
      addDummy(true);
    }
  });
}

export default useCreateTask;
