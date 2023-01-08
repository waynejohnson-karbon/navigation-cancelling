import Component from '@glimmer/component';
import {action} from '@ember/object'

export default class DirtyButtonComponent extends Component {
    @action dirtyThePage(){
        this.args.actionWhenClicked();
    }
}
