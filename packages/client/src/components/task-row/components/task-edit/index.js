import React, { useContext, useRef } from 'react';
import cx from 'classnames';
// Context Api
import { ThemeContext } from '../../../../store/theme.context';
// Hooks
import useTaskEdit from '../../hooks/useTaskEdit';

// Styles
import styles from './styles/taskView.module.scss';

function TaskEdit({ task }) {
  const inputRef = useRef();
  const { getInputValue, onFormSubmit, onFocus, onChange } = useTaskEdit({ inputRef, task });

  const { isDark, isLight } = useContext(ThemeContext);

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
