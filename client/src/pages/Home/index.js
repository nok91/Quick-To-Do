import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Input, Button } from '@geist-ui/react'
import Box from '@geist-ui/react-icons/box'
import { createRoom } from '../../api';
import { room } from '../../routes'

function Home() {
    const [ getTitle, setTitle ] = useState();
    const history = useHistory();

    const handleCreateRoom = async () => {
        const data = await createRoom(getTitle);
        history.push(`${room}/${data['_id']}`)
    }

    const onInputChange = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div>
            <div className="h-full">
                <Input icon={<Box />} placeholder="Room name" onChange={onInputChange} style={{width: '100%'}} />
                <Button type="secondary" auto size="small"onClick={handleCreateRoom}>Create</Button>
            </div>
        </div>
    )
}

Home.displayName = 'HomePage';

export default Home;