/// <reference path="../../typings/index.d.ts"/>
import * as sharkBar from '../images/sharkbar.jpg';
import angular = require('angular');

interface IWizardStep {
    name: string;
    stepIndex: number;
    sref: string;
    count: number;
    iconClass: string;
    isFirstStep?: boolean;
    isLastStep?: boolean;
}

interface IHomeControllerStateService extends angular.ui.IStateService {
    back: boolean;
}

export const HomeComponent: angular.IComponentOptions = {
    template: `
        <div class="text-center">
            <h1>
                <i class="{{vm.headerIcon}}"></i> {{vm.title}}
            </h1>
        </div>
        <ul class="nav nav-pills nav-justified">
            <li ng-repeat="step in vm.steps" ui-sref-active="active">
                <a ui-sref="{{step.sref}}">
                    <i ng-class="step.iconClass"></i><br /> {{step.name}}
                    <br />
                    <span class="badge">{{step.count}}</span>
                </a>
            </li>
        </ul>
        <hr>
        <div class="row text-center">
            <div class="col-xs-2 text-right">
                <div class="spacer"></div>
                <div class="spacer"></div>
                <div class="spacer"></div>
                <div class="spacer"></div>
                <button class="btn btn-default" ng-disabled="vm.activeStep.isFirstStep" ng-click="vm.previousStep()">
                    <i class="fa fa-chevron-left"></i>
                    Prev
                </button>

            </div>
            <div class="col-xs-8">
                <span>Active Step: {{vm.activeStep.name}}</span>
                <div class="view-animate-container" ng-class="{'view-back': vm.$state.back}">
                    <div class="well" ui-view></div>
                </div>

            </div>
            <div class="col-xs-2 text-left">
                <div class="spacer"></div>
                <div class="spacer"></div>
                <div class="spacer"></div>
                <div class="spacer"></div>
                <button class="btn btn-default" ng-disabled="vm.activeStep.isLastStep" ng-click="vm.nextStep()">
                    Next
                    <i class="fa fa-chevron-right"></i>
                </button>

            </div>
        </div>
    `,
    controllerAs: 'vm',
    controller: class HomeComponent implements angular.IOnInit {

        imageData: any;
        $onInit() {

            console.log('INIT HOME COMP');

            this.imageData = sharkBar;
        }

        public title: string = 'Wizard';
        public headerIcon: string = 'fa fa-magic';

        public steps: IWizardStep[] = [
            { name: 'Step 1', stepIndex: 0, count: 1, iconClass: 'fa fa-phone fa-2x', sref: 'home.step1', isFirstStep: true },
            { name: 'Step 2', stepIndex: 1, count: 2, iconClass: 'fa fa-graduation-cap fa-fw fa-2x', sref: 'home.step2' },
            { name: 'Step 3', stepIndex: 2, count: 5, iconClass: 'fa fa-users fa-fw fa-2x', sref: 'home.step3' },
            { name: 'Step 4', stepIndex: 3, count: 0, iconClass: 'fa fa-trophy fa-fw fa-2x', sref: 'home.step4' },
            { name: 'Step 5', stepIndex: 4, count: 5, iconClass: 'fa fa-clock-o fa-fw fa-2x', sref: 'home.step5' },
            { name: 'Step 6', stepIndex: 5, count: 9, iconClass: 'fa fa-tag fa-fw fa-2x', sref: 'home.step6' },
            { name: 'Step 7', stepIndex: 6, count: 5, iconClass: 'fa fa-briefcase fa-fw fa-2x', sref: 'home.step7', isLastStep: true },
        ];
        public activeStep: IWizardStep;

        static $inject: Array<string> = ['$rootScope', '$state', '$stateParams', '$transitions'];
        constructor(private $rootScope: angular.IRootScopeService,
            public $state: IHomeControllerStateService,
            private $stateParams: angular.ui.IStateParamsService, 
            public $transitions: any) {

            this.setActiveStep(this.$state.current.name);

            console.log('INIT HOME CONSTRUCTOR');

            this.$transitions.onSuccess({ to: '**' }, (trans, data) => {
                let fromStepIndex = this.activeStep.stepIndex;
                let toStepIndex = this.$state.current.data ? this.$state.current.data.stepIndex : 0;
                this.$state.back = (fromStepIndex > toStepIndex);
                //console.log('ACTIVE STEP', fromStepIndex)

                this.setActiveStep(this.$state.current.name);
            });
        }

        private setActiveStep(name: string) {
            angular.forEach(this.steps, (item, key) => {
                if (name === item.sref) {
                    this.activeStep = item;
                }
            });
        }

        previousStep() {
            let activeStepIndex = this.steps.indexOf(this.activeStep);
            if (activeStepIndex !== 0) {
                let newStep = this.steps[activeStepIndex - 1];
                this.$state.transitionTo(newStep.sref);
            }
        }

        nextStep() {
            let activeStepIndex = this.steps.indexOf(this.activeStep);
            if (activeStepIndex !== this.steps.length - 1) {
                let newStep = this.steps[activeStepIndex + 1];
                this.$state.transitionTo(newStep.sref);
            }
        }
    }
};
