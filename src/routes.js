import Dashboard from 'views/Dashboard/Dashboard.js';
import Profile from 'views/Dashboard/Profile.js';
import Tables from 'views/Dashboard/Tables.js';

import {
  HomeIcon,
  PersonIcon,
  StatsIcon
} from 'components/Icons/Icons';

export var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: '/admin',
  },

  {
    path: '/tables',
    name: 'Tables',
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: '/admin',
  },
  // {
  //   path: '/billing',
  //   name: 'Cognitive Session Report',
  //   icon: <CreditIcon color='inherit' />,
  //   component: Billing,
  //   layout: '/admin',
  // },
  // {
  //   path: '/EEG',
  //   name: 'EEG Report',
  //   icon: <CreditIcon color='inherit' />,
  //   //component: EEGReport,
  //   layout: '/admin',
  // },
  {
  
    category: 'account',
    state: 'pageCollapse',
    views: [
      {
        path: '/profile',
        name: 'About',
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: '/admin',
      },
      // {
      //   path: '/signin',
      //   name: 'Sign In',
      //   icon: <DocumentIcon color='inherit' />,
      //   component: SignIn,
      //   layout: '/auth',
      // },
      // {
      //   path: '/signup',
      //   name: 'Sign Up',
      //   icon: <RocketIcon color='inherit' />,
      //   secondaryNavbar: true,
      //   component: SignUp,
      //   layout: '/auth',
      // },
    ],
  },
];
// export default dashRoutes;