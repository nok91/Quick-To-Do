// Hooks
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCreateTask } from '../../../api/hooks';
import useDummyTask from '../../../api/hooks/useDummyTask';
import { LifecycleContext, lifecycles } from '../../../store/lifecycle.context';

function useTaskEdit({ inputRef }) {
  const mutateTask = useCreateTask();
  const { id } = useParams();
  const [getInputValue, setInputValue] = useState('');
  const { setLifecycleStatus } = useContext(LifecycleContext);
  const { setDummyTask } = useDummyTask();

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

  const onFocus = () => {
    setLifecycleStatus(lifecycles['task-typing-start']);
    if (getInputValue.length > 0) {
      setLifecycleStatus(lifecycles['task-typing-ready']);
    }
  };

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

  return {
    getInputValue,
    onFormSubmit,
    onChange,
    onFocus
  };
}

export default useTaskEdit;
