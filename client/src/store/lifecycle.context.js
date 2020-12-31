import { createContext } from 'react';

export const lifecycles = {
  init: 'init',
  'task-typing-start': 'task-typing-start',
  'task-typing-ready': 'task-typing-ready',
  updating: 'updating'
};

export const LifecycleContext = createContext({});
