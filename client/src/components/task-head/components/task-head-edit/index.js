import { Loading, Row, Text } from '@geist-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// Hooks
import { useGetRoom, useUpdateRoom } from '../../../../api/hooks';
// Styles
import styles from './styles/taskHEadEdit.module.scss';

function TaskHeadEdit() {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess, error } = useGetRoom(id);
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const [getValue, setValue] = useState('');
  const updateRoom = useUpdateRoom();

  useEffect(() => {
    if (isSuccess) {
      setValue(data?.title);
    }
  }, [isSuccess]);

  if (isLoading) {
    return (
      <Row style={{ padding: '10px 0' }}>
        <Loading>Loading</Loading>
      </Row>
    );
  }

  if (isError) {
    return <p>Error: {error}...</p>;
  }

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (formData) => {
    if (!id) return null;

    updateRoom.mutate({
      id,
      title: formData.taskTitle
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="taskTitle"
        ref={register({
          required: 'Task title is required.',
          minLength: {
            value: 2,
            message: 'Min length is 2 characters.'
          },
          maxLength: {
            value: 50,
            message: 'Max length is 50 characters.'
          }
        })}
        className={styles.input}
        type="text"
        onChange={handleOnChange}
        value={getValue}
      />
      {errors.taskTitle && <Text type="error">{errors.taskTitle.message}</Text>}
    </form>
  );
}

TaskHeadEdit.displayName = 'TaskHeadEdit';

export default TaskHeadEdit;
