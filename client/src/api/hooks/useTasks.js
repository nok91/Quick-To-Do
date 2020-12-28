import { useQuery } from 'react-query';
import { getTasks } from '..';

function useTasks(id) {
  const payload = useQuery('task-list', () => getTasks(id));
  const tasks = payload.data || [];
  const total = tasks.length;
  const completed = tasks.filter((item) => item.completed === true).length;

  return {
    ...payload,
    total,
    completed
  };
}

useTasks.displayName = 'useTasks';

export default useTasks;
