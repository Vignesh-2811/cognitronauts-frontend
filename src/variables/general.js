// Assets
import avatar1 from 'assets/img/avatars/avatar1.png';
import avatar10 from 'assets/img/avatars/avatar10.png';
import avatar2 from 'assets/img/avatars/avatar2.png';
import avatar3 from 'assets/img/avatars/avatar3.png';
import avatar4 from 'assets/img/avatars/avatar4.png';
import avatar5 from 'assets/img/avatars/avatar5.png';
import avatar7 from 'assets/img/avatars/avatar7.png';
import avatar8 from 'assets/img/avatars/avatar8.png';
import avatar9 from 'assets/img/avatars/avatar9.png';
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from 'components/Icons/Icons.js';
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from 'react-icons/fa';
import { SiDropbox } from 'react-icons/si';

export const dashboardTableData = [
  {
    members: [avatar9, avatar3, avatar2],
    contact: '123456789',
    budget: '$7,600',
    progression: 40,
  },
];

export const timelineData = [
  {
    title: 'First Name',
    date: 'Shakthi Vignesh',
    color: 'brand.200',
  },
  {
    title: 'Last Name',
    date: 'J',
    color: 'purple',
  },
  {
    title: 'DOB',
    date: '28 Nov 2002',
    color: 'orange',
  },
  {
    title: 'Phone Number',
    date: '9941949400',
    color: 'blue.400',
  },
  {
    title: 'E-mail',
    date: 'shakthivignesh2002@gmail.com',
    color: 'orange.300',
  },
];
export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: 'نسخة Vision UI',
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: '$14,000',
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: 'إضافة مسار التقدم',
    members: [avatar3, avatar2],
    budget: '$3,000',
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: 'إصلاح أخطاء النظام الأساسي',
    members: [avatar10, avatar4],
    budget: 'غير مضبوط',
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: 'إطلاق تطبيق الهاتف المحمول الخاص بنا',
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: '$32,000',
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: 'أضف صفحة التسعير الجديدة',
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: '$400',
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: 'إعادة تصميم متجر جديد على الإنترنت',
    members: [avatar9, avatar3, avatar2],
    budget: '$7,600',
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: 'patient',
    date: '22 DEC 7:20 PM',
    color: 'teal.300',
  },
  {
    logo: FaHtml5,
    title: 'طلب جديد #4219423',
    date: '21 DEC 11:21 PM',
    color: 'orange',
  },
  {
    logo: FaShoppingCart,
    title: 'مدفوعات الخادم لشهر أبريل',
    date: '21 DEC 9:28 PM',
    color: 'blue.400',
  },
  {
    logo: FaCreditCard,
    title: 'تمت إضافة بطاقة جديدة للطلب #3210145',
    date: '20 DEC 3:52 PM',
    color: 'orange.300',
  },
  {
    logo: SiDropbox,
    title: 'فتح الحزم من أجل التنمية',
    date: '19 DEC 11:35 PM',
    color: 'purple',
  },
  {
    logo: AdobexdLogo,
    title: 'طلب جديد #9851258',
    date: '18 DEC 4:41 PM',
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: 'Esthera Jackson',
    email: 'alexa@simmmple.com',
    subdomain: 'Manager',
    domain: 'Organization',
    status: 'Online',
    date: '14/06/21',
  },
  {
    logo: avatar2,
    name: 'Alexa Liras',
    email: 'laurent@simmmple.com',
    subdomain: 'Programmer',
    domain: 'Developer',
    status: 'Offline',
    date: '12/05/21',
  },
  {
    logo: avatar3,
    name: 'Laurent Michael',
    email: 'laurent@simmmple.com',
    subdomain: 'Executive',
    domain: 'Projects',
    status: 'Online',
    date: '07/06/21',
  },
  {
    logo: avatar4,
    name: 'Freduardo Hill',
    email: 'freduardo@simmmple.com',
    subdomain: 'Manager',
    domain: 'Organization',
    status: 'Online',
    date: '14/11/21',
  },
  {
    logo: avatar5,
    name: 'Daniel Thomas',
    email: 'daniel@simmmple.com',
    subdomain: 'Programmer',
    domain: 'Developer',
    status: 'Offline',
    date: '21/01/21',
  },
  {
    logo: avatar7,
    name: 'Mark Wilson',
    email: 'mark@simmmple.com',
    subdomain: 'Designer',
    domain: 'UI/UX Design',
    status: 'Offline',
    date: '04/09/20',
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: 'Patient 1',
    contact: '123456789',
    profile: 'Profile Page Link 1',
  },
  {
    logo: AtlassianLogo,
    name: 'Patient 2',
    contact: '123456789',
    profile: 'Profile Page Link 2',
  },
  {
    logo: SlackLogo,
    name: 'Patient 3',
    contact: '123456789',
    profile: 'Profile Page Link 3',
  },
  {
    logo: SpotifyLogo,
    name: 'Patient 4',
    contact: '123456789',
    profile: 'Profile Page Link 4',
  },
  {
    logo: JiraLogo,
    name: 'Patient 5',
    contact: '123456789',
    profile: 'Profile Page Link 5',
  },
];

export const invoicesData = [
  {
    date: 'March, 01, 2020',
    code: '#MS-415646',
    price: '$180',
    logo: FaFilePdf,
    format: 'PDF',
  },
  {
    date: 'February, 10, 2020',
    code: '#RV-126749',
    price: '$250',
    logo: FaFilePdf,
    format: 'PDF',
  },
  {
    date: 'April, 05, 2020',
    code: '#FB-212562',
    price: '$560',
    logo: FaFilePdf,
    format: 'PDF',
  },
  {
    date: 'June, 25, 2019',
    code: '#QW-103578',
    price: '$120',
    logo: FaFilePdf,
    format: 'PDF',
  },
  {
    date: 'March, 01, 2019',
    code: '#AR-803481',
    price: '$300',
    logo: FaFilePdf,
    format: 'PDF',
  },
];

export const billingData = [
  {
    name: 'Oliver Liam',
    company: 'Viking Burrito',
    email: 'oliver@burrito.com',
    number: 'FRB1235476',
  },
  {
    name: 'Lucas Harper',
    company: 'Stone Tech Zone',
    email: 'lucas@stone-tech.com',
    number: 'FRB1235476',
  },
  {
    name: 'Ethan James',
    company: 'Fiber Notion',
    email: 'ethan@fiber.com',
    number: 'FRB1235476',
  },
];

export const newestTransactions = [
  
  
];

export const olderTransactions = [
  
 
  
];

export const TaskData = [
  //general.js

  {
    name: "Mnemonic Mind Maze",

    logo: FaArrowUp,
  },
  {
    name: "Mnemonic Mind Maze",

    logo: FaArrowUp,
  },
  {
    name: "CogniRecall Quest",

    logo: FaArrowUp,
  },
  {
    name: "CogniRecall Quest",

    logo: FaArrowDown,
  },
];
  
