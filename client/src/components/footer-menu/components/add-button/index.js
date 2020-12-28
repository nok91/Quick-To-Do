import React, { useContext } from 'react';
import Plus from '@geist-ui/react-icons/plus';
import cx from 'classnames';
// Context Api
import { ThemeContext, themes } from '../../../../store/theme.context';
import { TasksContext } from '../../../../store/tasks.context';
// Components
import FooterMenuButton from '../footer-menu-button';
// Styles
import styles from './styles/addButton.module.scss';

function AddButton() {
  const [getTheme] = useContext(ThemeContext);
  const [, setTask] = useContext(TasksContext);

  const handleCreateTask = () => {
    setTask([
      {
        _id: '0',
        title: 'text',
        completed: false,
        idEdit: true
      }
    ]);
  };

  const className = cx({
    [styles['add-button']]: true,
    [styles.dark]: getTheme === themes.dark,
    [styles.light]: getTheme === themes.light
  });
  return (
    <FooterMenuButton className={className} onClick={handleCreateTask}>
      <Plus size={20} />
    </FooterMenuButton>
  );
}

AddButton.displayName = 'AddButton';

export default AddButton;
