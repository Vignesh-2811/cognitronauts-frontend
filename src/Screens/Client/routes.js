import Home from './Views/Home.js';
import Tables from 'views/Dashboard/Tables.js';
import Billing from 'views/Dashboard/Billing.js';
import RTLPage from 'views/RTL/RTLPage.js';
import Profile from 'views/Dashboard/Profile.js';
import SignIn from 'views/Pages/SignIn.js';
import SignUp from 'views/Pages/SignUp.js';

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from 'components/Icons/Icons';

export var ClientRoutes = [
  {
    path: '/home',
    name: 'Home',
    icon: <HomeIcon color='inherit' />,
    component: Home,
    layout: '/client',
  },

  {
    path: '/tables',
    name: 'Tables',
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: '/client',
  },
  {
    path: '/billing',
    name: 'Billing',
    icon: <CreditIcon color='inherit' />,
    component: Billing,
    layout: '/client',
  },

  {
    name: 'ACCOUNT PAGES',
    category: 'account',
    state: 'pageCollapse',
    views: [
      {
        path: '/profile',
        name: 'Profile',
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: '/client',
      },
    ],
  },
  {
    path: '/logout',
    name: 'Logout',
    icon: <CreditIcon color='inherit' />,
    component: Billing,
    layout: '/logout',
  },
];
