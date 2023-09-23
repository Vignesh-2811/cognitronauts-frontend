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
import Billing from 'views/Dashboard/Billing.js';
import EEGReports from 'views/Dashboard/EEG.js';
import Task from 'views/Dashboard/Task.js';
import Assign from 'views/Dashboard/Ass.js';
import ClientAssign from 'Screens/Client/Views/clientass.js';
import ClientCogni from 'Screens/Client/Views/clientcogni.js';
import ClientEEG from 'Screens/Client/Views/clienteeg.js';
import ClientTask from 'Screens/Client/Views/clienttask.js';

ReactDOM.render(
  <ChakraProvider theme={themeAuth} resetCss={false} w='100%'>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={`/admin/billing`} component={Billing} />
          <Route path={`/admin/assign`} component={Assign} />
          <Route path={`/admin/task`} component={Task} />

          <Route path={`/admin/eeg`} component={EEGReports} />
          <Route path={'/auth/signin'} component={SignIn} />
          <Route path={'/auth/signup'} component={SignUp} />
          <Route path={`/auth`} component={AuthLayout} />
          <Route path={`/admin`} component={AdminLayout} />
          <Route path={`/client/assign`} component={ClientAssign} />
          <Route path={`/client/task`} component={ClientTask} />
          <Route path={`/client/eeg`} component={ClientEEG} />
          <Route path={`/client/cogni`} component={ClientCogni} />
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
