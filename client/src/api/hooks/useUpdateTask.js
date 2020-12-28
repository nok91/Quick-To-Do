import { useMutation, useQueryClient } from 'react-query';
import { updateTask } from '..';

function useUpdateTask() {
  const queryClient = useQueryClient();
  return useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('room');
      queryClient.invalidateQueries('task-list');
    }
  });
}

export default useUpdateTask;
