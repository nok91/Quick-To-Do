import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@geist-ui/react';
import { createRoom } from '../../api';
import { room } from '../../routes';
// Components
import Skeleton from '../../components/skeleton';
import RandomIcon from '../../components/random-icon';
import QuoteBlock from '../../components/quote-block';
import Hr from '../../components/hr';

function Home() {
  const [getTitle] = useState();
  const history = useHistory();

  const handleCreateRoom = async () => {
    const data = await createRoom(getTitle);
    // eslint-disable-next-line no-underscore-dangle
    history.push(`${room}/${data._id}`);
  };

  // const onInputChange = (event) => {
  //     setTitle(event.target.value)
  // }

  return (
    <>
      <Skeleton>
        <Skeleton.Head>
          <QuoteBlock />
        </Skeleton.Head>
        <Skeleton.Body>
          <RandomIcon />
        </Skeleton.Body>
        <Skeleton.Footer style={{ textAlign: 'center' }}>
          <Hr />
          <p>
            Create your Tasks room and invite, share with others with a single
            click
          </p>
          <Button
            type="secondary"
            auto
            size="medium"
            onClick={handleCreateRoom}
            style={{ width: '100%' }}
          >
            Create Instant Room
          </Button>
        </Skeleton.Footer>
      </Skeleton>
    </>
  );
}

Home.displayName = 'HomePage';

export default Home;
