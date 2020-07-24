import { Ng1StateDeclaration } from "@uirouter/angularjs";

export const homeState: Ng1StateDeclaration = {
  name: 'home',
  abstract: true,
  url: '',
  component: 'appHome'
};

export const step1State: Ng1StateDeclaration = {
  name: 'home.step1',
  url: '/step1',
  template: '<h1>Step 1</h1>',
  data: {
    stepIndex: 0
  }
};

export const step2State: Ng1StateDeclaration = {
  name: 'home.step2',
  url: '/step2',
  template: '<h1>Step 2</h1>',
  data: {
    stepIndex: 1
  }
};
export const step3State: Ng1StateDeclaration = {
  name: 'home.step3',
  url: '/step3',
  template: '<h1>Step 3</h1>',
  data: {
    stepIndex: 2
  }
};
export const step4State: Ng1StateDeclaration = {
  name: 'home.step4',
  url: '/step4',
  template: '<h1>Step 4</h1>',
  data: {
    stepIndex: 3
  }
};
export const step5State: Ng1StateDeclaration = {
  name: 'home.step5',
  url: '/step5',
  template: '<h1>Step 5</h1>',
  data: {
    stepIndex: 4
  }
};
export const step6State: Ng1StateDeclaration = {
  name: 'home.step6',
  url: '/step6',
  template: '<h1>Step 6</h1>',
  data: {
    stepIndex: 5
  }
};
export const step7State: Ng1StateDeclaration = {
  name: 'home.step7',
  url: '/step7',
  template: '<h1>Step 7</h1>',
  data: {
    stepIndex: 6
  }
};
export const aboutState = {
  name: 'about',
  url: '/about',
  component: 'appAbout'
  //template: '<h3>About...</h3>'
};