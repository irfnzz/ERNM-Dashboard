import Login from 'pages/Login';
import Register from 'pages/Register';
import ForgotPasswordRequest from 'pages/ForgotPassword';
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
import NotFound from 'pages/NotFound';
import Datatables from 'pages/Datatables';
import App from './client/app';
import UserProfile from 'pages/UserProfile';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Post,
        title: 'Post',
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
        path: '/register',
        component: Register,
        title: 'Register',
      },
      {
        path: '/forgotPasswordrequest',
        component: ForgotPasswordRequest,
        title: 'Forgot Password Request',
      },
      {
        path: '/introduce/projects',
        component: Projects,
        title: 'Projects',
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
