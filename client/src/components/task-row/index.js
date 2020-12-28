import React, { useEffect, useRef } from 'react';
import { Checkbox } from '@geist-ui/react';
import { If, Then, Else } from 'react-if';
import moment from 'moment';
import cx from 'classnames';
// Hooks
import { useParams } from 'react-router-dom';
import { useCreateTask, useUpdateTask } from '../../api/hooks';
// Styles
import styles from './styles/taskRow.module.scss';

function TaskRow({ task, isEdit = false }) {
  const { id } = useParams();
  const updateTask = useUpdateTask();
  const inputRef = useRef();
  const mutateTask = useCreateTask();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleOnChecked = (event, _id) => {
    updateTask.mutate({
      id: _id,
      completed: event.target.checked
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!id) return null;
    mutateTask.mutate({
      room: id,
      title: inputRef.current.value
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
        <Checkbox
          onChange={(event) => handleOnChecked(event, task._id)}
          checked={task.completed}
        />
      </div>
      <div className={styles.content}>
        <If condition={isEdit}>
          <Then>
            <form onSubmit={onFormSubmit}>
              <input
                ref={inputRef}
                type="text"
                className={styles['input-title']}
                placeholder="Add a Task..."
              />
            </form>
          </Then>
          <Else>
            <h3 className={styles.title}>{task.title}</h3>
            <div className={styles.date}>
              {moment(task.updatedAt).format('ddd, hA')}
            </div>
          </Else>
        </If>
      </div>
    </div>
  );
}

TaskRow.displayName = 'TaskRow';

export default TaskRow;
