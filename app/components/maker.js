import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MakerComponent extends Component {
    @service router;

    currentRouteName;
    isDirty = false;
    @tracked showModal = false;
    savedTransition;
    navigationEvent;

    constructor(owner, args) {
        console.log('constructor');
        super(owner, args);

        this.currentRouteName = this.router.currentRouteName;
        this.navigationEvent = this.startNavigation.bind(this);
        this.router.on('routeWillChange', this.navigationEvent);
        console.log('constructor end');
    }

    startNavigation(transition){
        console.log('startNavigation', transition);
        //no recursive aborts.
        if (transition.isAborted){
            return;
        } 

        if (this.isDirty){
            this.savedTransition = transition;
            transition.abort();
            this.showModal = true;
        }
    }

    willDestroy() {
        console.log('willDestroy fired');
        super.willDestroy(...arguments);
        //remove the event or it will fire on the navigation on every page.
        this.router.off('routeWillChange', this.navigationEvent);
        console.log('willDestroy finished');
    }

    @action doSomething(){
        console.log('something was done');
        this.isDirty = true;
    }

    @action okAction(){
        console.log('okAction retry transition.');
        console.log('okAction retry transition');
        this.isDirty = false;
        this.router.transitionTo(this.savedTransition.to.localName);
    }

    @action cancelAction(){
        this.showModal = false;
    }
}
