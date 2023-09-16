import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import { Provider } from 'react-redux';
import store from 'redux/store';
import ClientDashboard from 'layouts/Client';
import SignIn from 'views/Pages/SignIn.js';
import themeAuth from 'theme/themeAuth.js';
import { ChakraProvider } from '@chakra-ui/react';
import SignUp from 'views/Pages/SignUp';

ReactDOM.render(
  <ChakraProvider theme={themeAuth} resetCss={false} w='100%'>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={'/auth/signin'} component={SignIn} />
          <Route path={'/auth/signup'} component={SignUp} />

          {/* <Route path={`/auth`} component={AuthLayout} /> */}
          <Route path={`/admin`} component={AdminLayout} />
          <Route path={`/client`} component={ClientDashboard} />
          <Redirect from={`/`} to='/auth/signin' />
        </Switch>
      </Router>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);
