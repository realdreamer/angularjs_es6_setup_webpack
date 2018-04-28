'use strict';

import mainHeaderComponentsModule from "./components/header/header.module";
import footerModule from './components/footer/footer.module';

export default angular.module("index.components", [
  mainHeaderComponentsModule.name,
  footerModule.name
]);
