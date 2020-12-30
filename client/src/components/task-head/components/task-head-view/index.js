import React from 'react';
import { useParams } from 'react-router-dom';
// Hooks
import { useGetRoom } from '../../../../api/hooks';
// Styles
import styles from './styles/taskHeadView.module.scss';

function TaskHeadView() {
  const { id } = useParams();
  const getRoom = useGetRoom(id);

  return (
    <>
      <h1 className={styles.title}>
        {getRoom.isSuccess && getRoom.data.title}
      </h1>
    </>
  );
}

TaskHeadView.displayName = 'TaskHeadView';

export default TaskHeadView;
