import Login from 'pages/Login';
import Register from 'pages/Register';
import ForgotPasswordRequest from 'pages/ForgotPassword';
import ResetPassword from 'pages/ForgotPassword/ResetPassword';
import Post from 'pages/Post';
import { getPostsAction } from 'pages/Post/action';
import PostDetail from 'pages/Post/PostDetail';
import {
  getPostDetailAction,
  getCommentsAction,
} from 'pages/Post/PostDetail/action';
import CreatePost from 'pages/Post/CreatePost';
import Introduce from 'pages/Introduce';
import Projects from 'pages/Introduce/Projects';
import Contact from 'pages/Contact';
import Mainmenu from 'pages/Main';
import Auditlog from 'pages/Audit';
import NotFound from 'pages/NotFound';
import Datatables from 'pages/Datatables';
import Permissionview from 'pages/Permissionview';
import Techstack from 'pages/Techstack';
import App from './client/app';
import UserProfile from 'pages/UserProfile';
import Users from 'pages/Users';
import UserView from 'pages/UserView';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Mainmenu,
        title: 'Main Menu',
        loadData: ({ _params }) => [getPostsAction()],
      },
      {
        path: '/p/:_id',
        component: PostDetail,
        loadData: ({ params: { _id } }) => [
          getPostDetailAction(_id),
          getCommentsAction(_id),
        ],
      },
      {
        path: '/create-post',
        component: CreatePost,
        title: 'Create post',
      },
      {
        path: '/login',
        component: Login,
        title: 'Login',
      },
      {
        path: '/permissionview',
        component: Permissionview,
        title: 'Permission view',
      },
      {
        path: '/register',
        component: Register,
        title: 'Register',
      },
      {
        path: '/techstack',
        component: Techstack,
        title: 'Tech Stack',
      },
      {
        path: '/auditlog',
        component: Auditlog,
        title: 'Audit',
      },
      {
        path: '/forgotpasswordrequest',
        component: ForgotPasswordRequest,
        title: 'Forgot Password Request',
      },
      {
        path: '/resetpassword',
        component: ResetPassword,
        title: 'Reset Password',
      },
      {
        path: '/mainmenu',
        component: Mainmenu,
        title: 'Main Menu',
      },
      {
        path: '/introduce/projects',
        component: Projects,
        title: 'Projects',
      },
      {
        path:'/UserView',
        component: UserView,
        title : 'Userview',
      },
      {
        path: '/introduce',
        component: Introduce,
        title: 'Introduce',
      },
      {
        path: '/contact',
        component: Contact,
        title: 'Contact',
      },
      {
        path: '/userprofile',
        component: UserProfile,
        title: 'User Profile', //profile page
      },
      {
        path: '/users',
        component: Users,
        title: 'Users',
      },
      {
        path: '/datatables',
        component: Datatables,
        title: 'Data Table',
      },
      {
        component: NotFound,
        title: 'Error',
      },
    ],
  },
];
