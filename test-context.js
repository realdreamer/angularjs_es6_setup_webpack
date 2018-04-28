import "babel-polyfill";

import angular from "angular";
import mocks from "angular-mocks";

import * as main from "./app/js/app";

let context = require.context("./app", true, /\.spec\.js/);
context.keys().forEach(context);
