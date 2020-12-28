import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import cx from 'classnames';
// Components
import * as routes from './routes';
import Home from './pages/Home';
import ReduxDemo from './pages/ReduxDemo';
import Room from './pages/Room';
import NotFound from './pages/NotFound';
import { ThemeContext, themes } from './store/theme.context';
// Styles
import styles from './styles/app.module.scss';

const queryClient = new QueryClient();

function App() {
  const [getTheme, setTheme] = useState(themes.light);

  const className = cx({
    [styles.app]: true,
    [styles.dark]: getTheme === themes.dark,
    [styles.light]: getTheme === themes.light
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={[getTheme, setTheme]}>
        <div className={className}>
          <main className="bg-primaryLight">
            <div className="h-screen max-w-7xl mx-auto px-4 py-6 sm:px-6">
              <Switch>
                <Route path={routes.home} component={Home} exact />
                <Route path={routes.reduxDemo} component={ReduxDemo} />
                <Route path={`${routes.room}/:id`} component={Room} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </main>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
