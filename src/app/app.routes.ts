import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';

import { Home } from './home';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'projects',  component: 'Projects' },
  { path: 'cv',  component: 'CV' },
  { path: '**',    component: NoContent }
];

export const asyncRoutes: AsyncRoutes = {
  'Projects': require('es6-promise-loader!./projects'),
  'CV': require('es6-promise-loader!./cv')
};

export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['Projects'],
  asyncRoutes['CV']
];

