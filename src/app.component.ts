export const AppComponent = {
    template: `
      <div>
        <h2>Hello {{ $ctrl.name }}</h2>
      </div>
    `,
    controller: class AppComponent {
        name: string;
        $onInit() {
            this.name = 'AngularJS, Typescript, and Webpack'
        }
    }
};