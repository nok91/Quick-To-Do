import React, { useContext, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useParams } from 'react-router-dom';
// Context Api
import { ThemeContext } from '../../../../store/theme.context';
// Hooks
import { useCreateTask } from '../../../../api/hooks';
// Styles
import styles from './styles/taskView.module.scss';
import {
  LifecycleContext,
  lifecycles
} from '../../../../store/lifecycle.context';
import useDummyTask from '../../../../api/hooks/useDummyTask';

function TaskEdit() {
  const { id } = useParams();
  const [getInputValue, setInputValue] = useState('');
  const mutateTask = useCreateTask();
  const { isDark, isLight } = useContext(ThemeContext);
  const { setLifecycleStatus } = useContext(LifecycleContext);
  const { setDummyTask } = useDummyTask();
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute('autofocus', 'autofocus');
      inputRef.current.focus();
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    setLifecycleStatus(lifecycles['task-typing-start']);
    if (getInputValue.length > 0) {
      setLifecycleStatus(lifecycles['task-typing-ready']);
    }
  }, [getInputValue]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!id) return null;
    mutateTask.mutate({
      room: id,
      title: inputRef.current.value
    });
  };

  const onChange = () => {
    setInputValue(inputRef.current.value);
    setDummyTask(inputRef.current.value);
  };

  const onBlur = () => {
    // setLifecycleStatus(lifecycles.init);
    // reset();
  };

  const onFocus = () => {
    setLifecycleStatus(lifecycles['task-typing-start']);
    if (getInputValue.length > 0) {
      setLifecycleStatus(lifecycles['task-typing-ready']);
    }
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
          value={getInputValue}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
      </form>
    </>
  );
}

TaskEdit.displayName = 'TaskEdit';

export default TaskEdit;
