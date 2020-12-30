import React, { useContext } from 'react';
import Plus from '@geist-ui/react-icons/plus';
import cx from 'classnames';
// Context Api
import { ThemeContext } from '../../../../store/theme.context';
// Components
import FooterMenuButton from '../footer-menu-button';
// Styles
import styles from './styles/addButton.module.scss';
import useDummyTask from '../../../../api/hooks/useDummyTask';

function AddButton() {
  const { isDark, isLight } = useContext(ThemeContext);
  const { addDummy } = useDummyTask();

  const handleCreateTask = () => {
    addDummy();
  };

  const className = cx({
    [styles['add-button']]: true,
    [styles.dark]: isDark,
    [styles.light]: isLight
  });
  return (
    <FooterMenuButton className={className} onClick={handleCreateTask}>
      <Plus size={20} />
    </FooterMenuButton>
  );
}

AddButton.displayName = 'AddButton';

export default AddButton;
