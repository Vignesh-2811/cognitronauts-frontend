// App.js or Root Component
import React from 'react';
import { AssignmentProvider } from 'Screens/Client/Views/asscontext'; // Import the AssignmentProvider
import AssRow from  'components/Tables/AssRow';
import ClientAssign from 'Screens/Client/Views/clientass.js'; // Import your Admin Dashboard component
import Dashboard from 'views/Dashboard/Dashboard';
import Home from './Home';
 // Import your Client Dashboard component

function MainApp() {
  return (
    <AssignmentProvider>
      {/* Include all your components here */}
      <Dashboard/>
      <Home/>
    </AssignmentProvider>
  );
}

export default MainApp;
