import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import * as routes from './routes';
// Components
import Home from './pages/Home';
import ReduxDemo from './pages/ReduxDemo';
import Room from './pages/Room';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className="bg-primaryLight">
          <div className="h-screen max-w-7xl mx-auto px-4 py-6 sm:px-6">
            <Switch>
              <Route path={ routes.home } component={Home} exact />
              <Route path={ routes.reduxDemo } component={ReduxDemo} />
              <Route path={ `${routes.room}/:id` } component={Room} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;