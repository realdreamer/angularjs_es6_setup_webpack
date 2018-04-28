'use strict';
class HeaderComponentController {
  constructor () {
    'ngInject';
    this.title = 'My Page title from Controller';
  }
  $onInit() {
    console.log("initializing Posts...");
  }

  $onDestroy() {
    console.log("destroying Posts...");
  }
}

export default HeaderComponentController;
