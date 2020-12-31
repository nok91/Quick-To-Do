import React from 'react';
import cx from 'classnames';
import { format, isToday } from 'date-fns';
import styles from './styles/taskView.module.scss';

function TaskView({ task = {} }) {
  const updatedAt = new Date(task.updatedAt);
  const lastUpdatedAt = isToday(updatedAt)
    ? format(updatedAt, 'h:mm bb')
    : format(updatedAt, 'dd/M/yy');

  return (
    <>
      <h3
        className={cx({
          [styles.title]: true,
          [styles.completed]: Boolean(task.completed)
        })}
      >
        {task.title}
      </h3>
      <div className={styles.date}>{lastUpdatedAt}</div>
    </>
  );
}

TaskView.displayName = 'TaskView';

export default TaskView;
