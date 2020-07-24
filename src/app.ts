import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import 'angular-animate';
import { homeState, aboutState, step1State, step2State, step3State, step4State, step5State, step6State, step7State } from "./app.states";
import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StateProvider } from '@uirouter/angularjs';

let appModule =
  angular
    .module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider: StateProvider, $urlRouterProvider: any, $locationProvider: angular.ILocationProvider) {


      //$locationProvider.html5Mode({ enabled: true, requireBase: false, rewriteLinks: true });
      $locationProvider.hashPrefix('');

      $stateProvider
            .state('home', homeState)
            .state('home.step1', step1State)
            .state('home.step2', step2State)
            .state('home.step3', step3State)
            .state('home.step4', step4State)
            .state('home.step5', step5State)
            .state('home.step6', step6State)
            .state('home.step7', step7State)
            .state('about', aboutState);

      $urlRouterProvider.otherwise("/about");

    }])
    .component('myApp', AppComponent)
    .component('appNav', NavComponent)
    .component('appHome', HomeComponent)
    .component('appAbout', AboutComponent);

angular.bootstrap(document, [appModule.name]);