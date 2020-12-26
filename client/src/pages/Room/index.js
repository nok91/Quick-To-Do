import React, { useState } from 'react';
import { Input, Button, Checkbox, Row, Loading } from '@geist-ui/react'
import PenTool from '@geist-ui/react-icons/penTool'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { getTasks, createTask, updateTask } from '../../api';

import styles from './styles/room.module.scss'

function Room(props) {
    const { id } = useParams();
    const [ getTitle, setTitle ] = useState('');
    const {data, error, isLoading, isError} = useQuery("task-list", () => getTasks(id))
    const queryClient = useQueryClient();
    const mutateTask = useMutation(createTask, {
        onSuccess: () => {
          queryClient.invalidateQueries('task-list');
          setTitle('');
        },
      })

    const mutateUTask = useMutation(updateTask, {
        onSuccess: () => {
          queryClient.invalidateQueries('room')
        },
      })

    const handleCreateTask = () => {
        mutateTask.mutate({
            title: getTitle,
            room: id
        });

    }

    const onInputChange = (event) => {
        setTitle(event.target.value)
    }

    const handleOnChecked = (event, id) => {
        mutateUTask.mutate({
            id,
            completed: event.target.checked
        });
    }

    if(isLoading){
        return(
            <Row style={{ padding: '10px 0'}}>
                <Loading>Loading</Loading>
            </Row>
        )
    }

    if(isError){
        return(<p>Error: {error}...</p>)
    }

    return (
       <div className={styles.room}>
             <div className={styles.create}>
                <Input icon={<PenTool />} placeholder="Add a Task" value={getTitle} onChange={onInputChange} style={{width: '100%'}} />
                <Button type="secondary" auto size="small"onClick={handleCreateTask}>Create</Button>
            </div>
            <ul>        
                {
                    data && data.map( task => {
                        return <div key={task['_id']}><Checkbox onChange={(event) => handleOnChecked(event, task['_id'])} checked={task.completed}>{ task.title }</Checkbox></div>
                    })
                }
            </ul>
       </div>
    );
};

Room.displayName = 'Room';

export default Room;
