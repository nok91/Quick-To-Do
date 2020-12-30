import React from 'react';
import { Checkbox } from '@geist-ui/react';
import { If, Then, Else } from 'react-if';
import cx from 'classnames';
import Edit3 from '@geist-ui/react-icons/edit3';
// Hooks
import { useUpdateTask } from '../../api/hooks';
// Components
import TaskEdit from './components/task-edit';
import TaskView from './components/task-view';
// Styles
import styles from './styles/taskRow.module.scss';

function TaskRow({ task, isEdit = false }) {
  const updateTask = useUpdateTask();

  const handleOnChecked = (event, _id) => {
    updateTask.mutate({
      id: _id,
      completed: event.target.checked
    });
  };

  return (
    <div
      className={cx({
        [styles['task-row']]: true,
        [styles.edit]: isEdit
      })}
    >
      <div className={styles.checkbox}>
        <If condition={isEdit}>
          <Then>
            <Edit3 size={16} />
          </Then>
          <Else>
            <Checkbox
              onChange={(event) => handleOnChecked(event, task._id)}
              checked={task.completed}
            />
          </Else>
        </If>
      </div>
      <div className={styles.content}>
        <If condition={isEdit}>
          <Then>
            <TaskEdit />
          </Then>
          <Else>
            <TaskView task={task} />
          </Else>
        </If>
      </div>
    </div>
  );
}

TaskRow.displayName = 'TaskRow';

export default TaskRow;
