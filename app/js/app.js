import angular from 'angular';

import components from './index.components';

const app = angular.module("app", [components.name]);

app.controller('appController', function ($scope) {
  'ngInject';
  this.greeting = "Hello World..!";
});

angular.bootstrap(document, ['app']);

export default app;
