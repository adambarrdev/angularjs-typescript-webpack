import * as angular from 'angular';

import { AppComponent } from './app.component';

let appModule = 
  angular.module('app', [])
    .component('myApp', AppComponent);

angular.bootstrap(document, [ appModule.name ]);