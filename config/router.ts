const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    layout: false,
    component: './Home',
  },
  {
    path: '*',
    component: '/404',
  },
  {
    path: '/500',
    component: '/500',
  }
];

export default routes;
