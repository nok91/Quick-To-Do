import React, { useContext } from 'react';
import Plus from '@geist-ui/react-icons/plus';
import cx from 'classnames';
import Send from '@geist-ui/react-icons/send';
import { Switch, Case, Default } from 'react-if';
// Context Api
import { Loading, Row } from '@geist-ui/react';
import { useParams } from 'react-router-dom';
// Context Api
import { ThemeContext } from '../../../../store/theme.context';
import {
  LifecycleContext,
  lifecycles
} from '../../../../store/lifecycle.context';
// Hooks
import useDummyTask from '../../../../api/hooks/useDummyTask';
import { useCreateTask } from '../../../../api/hooks';
// Components
import FooterMenuButton from '../footer-menu-button';
// Styles
import styles from './styles/addButton.module.scss';

function AddButton() {
  const { isDark, isLight } = useContext(ThemeContext);
  const { status } = useContext(LifecycleContext);
  const mutateTask = useCreateTask();
  const { id } = useParams();

  const { addDummy, getTasks = [] } = useDummyTask();

  const handleCreateTask = () => {
    addDummy();
  };

  const onSubmit = () => {
    if (!id && !getTasks[0]) return null;
    mutateTask.mutate({
      room: id,
      title: getTasks[0].title
    });
  };

  const className = cx({
    [styles['add-button']]: true,
    [styles.dark]: isDark,
    [styles.light]: isLight
  });

  return (
    <FooterMenuButton className={className} onClick={handleCreateTask}>
      <Switch>
        <Case condition={status === lifecycles['task-typing-start']}>
          <Row className={styles['loading-wrapper']}>
            <Loading type={isDark ? 'secondary' : 'warning'} />
          </Row>
        </Case>
        <Case condition={status === lifecycles['task-typing-ready']}>
          <Send size={20} onClick={onSubmit} />
        </Case>
        <Default>
          <Plus size={20} />
        </Default>
      </Switch>
    </FooterMenuButton>
  );
}

AddButton.displayName = 'AddButton';

export default AddButton;
