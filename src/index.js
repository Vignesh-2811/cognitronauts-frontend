import ReactDOM from 'react-dom';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import { Provider } from 'react-redux';
import store from 'redux/store';
import themeAuth from 'theme/themeAuth.js';
import SignIn from 'views/Pages/SignIn.js';
import SignUp from 'views/Pages/SignUp';
import ClientDashboard from './Screens/Client/Client.js';

ReactDOM.render(
  <ChakraProvider theme={themeAuth} resetCss={false} w='100%'>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={'/auth/signin'} component={SignIn} />
          <Route path={'/auth/signup'} component={SignUp} />
          <Route path={`/auth`} component={AuthLayout} /> 
          <Route path={`/admin`} component={AdminLayout} />
          <Route path={`/client`} component={ClientDashboard} />
           

          {/* <PrivateRoute
            path='/admin'
            component={AdminLayout}
            expectedRole='Doctor'
          />
          <PrivateRoute
            path='/client'
            component={ClientDashboard}
            expectedRole='Patient'
          /> */}

          <Redirect from={`/`} to='/auth/signin' />
        </Switch>
      </Router>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);
