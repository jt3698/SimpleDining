import React from 'react';

const Food = React.lazy(() => import('./views/Food/Food'));
const Service = React.lazy(() => import('./views/Service/Service'));
const Ambience = React.lazy(() => import('./views/Ambience/Ambience'));
const Orders = React.lazy(() => import('./views/Orders/Orders'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/orders', name: 'Orders', component: Orders },
  { path: '/food', name: 'Food', component: Food },
  { path: '/service', name: 'Service', component: Service },
  { path: '/ambience', name: 'Ambience', component: Ambience },
];

export default routes;
