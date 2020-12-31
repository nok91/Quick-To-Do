import { useMutation, useQueryClient } from 'react-query';
import { updateRoom } from '..';

function useUpdateTask() {
  const queryClient = useQueryClient();
  return useMutation(updateRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries('room');
      queryClient.invalidateQueries('task-list');
    }
  });
}

export default useUpdateTask;
