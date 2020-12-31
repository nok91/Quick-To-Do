import React from 'react';
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
import { ThemeContext } from './store/theme.context';
import { LifecycleContext } from './store/lifecycle.context';
// Styles
import styles from './styles/app.module.scss';
import useThemeContext from './store/hooks/useTheme.context';
import useLifecycle from './store/hooks/useLifecycle.context';

const queryClient = new QueryClient();

function App() {
  const { isDark, isLight, handler } = useThemeContext();
  const lifecycleApp = useLifecycle();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ isDark, isLight, handler }}>
        <LifecycleContext.Provider value={lifecycleApp}>
          <div
            className={cx({
              [styles.app]: true,
              [styles.dark]: isDark,
              [styles.light]: isLight
            })}
          >
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
        </LifecycleContext.Provider>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
