import React, { useContext, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useParams } from 'react-router-dom';
// Context Api
import { ThemeContext } from '../../../../store/theme.context';
// Hooks
import { useCreateTask } from '../../../../api/hooks';
// Styles
import styles from './styles/taskView.module.scss';

function TaskEdit() {
  const { id } = useParams();
  const mutateTask = useCreateTask();
  const inputRef = useRef();
  const { isDark, isLight } = useContext(ThemeContext);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute('autofocus', 'autofocus');
      inputRef.current.focus();
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    let timer;
    if (inputRef.current) {
      timer = setTimeout(() => {
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!id) return null;
    mutateTask.mutate({
      room: id,
      title: inputRef.current.value
    });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          ref={inputRef}
          type="text"
          className={cx({
            [styles['input-title']]: true,
            [styles.dark]: isDark,
            [styles.light]: isLight
          })}
          placeholder="Add a Task..."
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
      </form>
    </>
  );
}

TaskEdit.displayName = 'TaskEdit';

export default TaskEdit;
