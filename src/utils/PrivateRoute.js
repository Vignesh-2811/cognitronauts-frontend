import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  role,
  expectedRole,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          if (role === expectedRole) {
            return <Component {...props} />;
          } else {
            // Redirect to appropriate page based on userRole
            return role === 'Doctor' ? (
              <Redirect to='/admin/dashboard' />
            ) : (
              <Redirect to='/client/dashboard' />
            );
          }
        }
        return <Redirect to='/auth/signin' />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    role: state.user.role,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
