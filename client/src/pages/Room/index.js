import React, { useState } from 'react';
import { Row, Loading, Progress } from '@geist-ui/react';
import { useParams } from 'react-router-dom';
// Context API
import { Else, If, Then } from 'react-if';
import { TasksContext } from '../../store/tasks.context';
// Component
import Skeleton from '../../components/skeleton';
import { useGetRoom, useTasks } from '../../api/hooks';
// Styles
import styles from './styles/room.module.scss';
import FooterMenu from '../../components/footer-menu';
import TaskRow from '../../components/task-row';

function Room() {
  const [getTasks, setTask] = useState([]);
  const { id } = useParams();
  const getRoom = useGetRoom(id);
  const { data, error, isLoading, isError, total, completed } = useTasks(id);

  if (isLoading) {
    return (
      <Row style={{ padding: '10px 0' }}>
        <Loading>Loading</Loading>
      </Row>
    );
  }

  if (isError) {
    return <p>Error: {error}...</p>;
  }

  const itHasData = data.length > 0 || getTasks.length > 0;

  return (
    <TasksContext.Provider value={[getTasks, setTask]}>
      <Skeleton className={styles.room}>
        <Skeleton.Head className={styles.head}>
          <h1>{getRoom.isSuccess && getRoom.data.title}</h1>
          <Progress className={styles.progress} value={completed} max={total} />
        </Skeleton.Head>

        <Skeleton.Body className={styles.body}>
          <div className={styles['tasks-list']}>
            <If condition={itHasData}>
              <Then>
                {data.map((task) => (
                  <TaskRow key={task._id} task={task} />
                ))}
                {getTasks.map((task) => (
                  <TaskRow key={task._id} task={task} isEdit />
                ))}
              </Then>
              <Else>No Tasks</Else>
            </If>
          </div>
        </Skeleton.Body>

        <Skeleton.Footer className={styles.footer}>
          <FooterMenu />
        </Skeleton.Footer>
      </Skeleton>
    </TasksContext.Provider>
  );
}

Room.displayName = 'Room';

export default Room;
