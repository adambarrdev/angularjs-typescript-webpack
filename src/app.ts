import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import { homeState, aboutState } from "./app.states";
import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";

let appModule =
  angular
    .module('app', ['ui.router', 'ui.bootstrap'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $stateProvider
            .state('home', homeState)
            .state('about', aboutState);

      $urlRouterProvider.otherwise("/");

    }])
    .component('myApp', AppComponent)
    .component('appNav', NavComponent);

angular.bootstrap(document, [appModule.name]);