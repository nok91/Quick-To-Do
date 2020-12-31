import { useState } from 'react';
import { lifecycles } from '../lifecycle.context';

function useLifecycle() {
  const [getLifecycle, setLifecycle] = useState({
    status: lifecycles.init
  });

  const setLifecycleStatus = (el) => {
    setLifecycle({
      status: el
    });
  };

  return {
    handler: [getLifecycle, setLifecycle],
    status: getLifecycle.status,
    setLifecycleStatus
  };
}

useLifecycle.displayName = 'useLifecycle.context';

export default useLifecycle;
