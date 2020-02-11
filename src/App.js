import React, { Suspense } from 'react';
import Main from "./pages/Main";
import { ConnectedRouter } from 'connected-react-router';
import {history} from './store/configureStore';
import routes from './routes';



function App() {
  return (
      <Suspense fallback="loading">
          <Main>
            <ConnectedRouter history={history}>
                {routes}
            </ConnectedRouter>
          </Main>
      </Suspense>

  );
}

export default App;
