import React, { Suspense } from 'react';
import Home from "./pages/Home";
import { ConnectedRouter } from 'connected-react-router';
import {history} from './store/configureStore';
import routes from './routes';



function App() {
  return (
      <Suspense fallback="loading">
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>

      </Suspense>

  );
}

export default App;
