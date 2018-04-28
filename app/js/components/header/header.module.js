'use strict';
import {appHeaderComponent, COMPONENT_NAME}from './header.component.js';

const mainHeaderComponentsModule = angular.module('main.header.components', []);
mainHeaderComponentsModule.component(COMPONENT_NAME, appHeaderComponent);

export default mainHeaderComponentsModule;
