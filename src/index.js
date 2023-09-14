import ReactDOM from 'react-dom';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import { Provider } from 'react-redux';
import store from 'redux/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Redirect from={`/`} to='/auth/signin' />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
