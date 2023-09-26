// App.js or Root Component
import { AssignmentProvider } from 'Screens/Client/Views/asscontext'; // Import the AssignmentProvider
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
