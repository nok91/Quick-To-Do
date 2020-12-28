import { useQuery } from 'react-query';
import { getRoom } from '..';

function useGetRoom(id) {
  return useQuery('room', () => getRoom(id));
}

export default useGetRoom;
