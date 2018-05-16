import { Ng1StateDeclaration } from "@uirouter/angularjs";

export const homeState: Ng1StateDeclaration = {
  name: 'home',
  url: '/',
  component: 'appHome'
  //template: '<h3>Home</h3>'
};

export const aboutState = {
  name: 'about',
  url: '/about',
  component: 'appAbout'
  //template: '<h3>About...</h3>'
};