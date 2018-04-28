'use strict';

import footerTpl from './footer.tpl.html';

function footerComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    template: footerTpl,
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function FooterController () {
	  $log.debug('Hello from footer controller!');
  }

}

export default footerComponent;
