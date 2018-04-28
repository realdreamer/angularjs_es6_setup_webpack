'use strict';
// import '../../../../style/reset.scss';

import headerComponentTpl from './headerTemplate.tpl.html';
import HeaderComponentController from './header.component.controller';

export const COMPONENT_NAME = 'appHeader';

export const appHeaderComponent = {
  template: headerComponentTpl,
  bindings: {
    title: '=',
    menus: '='
  },
  controllerAs: 'headerCtrl',
  controller: HeaderComponentController
};
