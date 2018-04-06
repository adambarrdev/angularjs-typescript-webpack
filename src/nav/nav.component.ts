
class NavController {

    public isCollapsed: boolean = true;

    static $inject: Array<string> = ['$rootScope', '$state'];
    constructor(private $rootScope: angular.IRootScopeService,
        public $state: angular.ui.IStateService) {

        let self = this;
        this.$rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                self.isCollapsed = true;
            });
    }
}

export const NavComponent = {
    controller: NavController,
    controllerAs: 'vm',
    template: `
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><i class="fa fa-code"></i></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li ng-class="{active:vm.$state.includes('home')}"><a ui-sref="home">Home <span class="sr-only">(current)</span></a></li>
                    <li ng-class="{active:vm.$state.includes('about')}"><a ui-sref="about">About</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="https://github.com/adambarrdev/angularjs-typescript-webpack" target="_blank"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>

        </nav>`
}