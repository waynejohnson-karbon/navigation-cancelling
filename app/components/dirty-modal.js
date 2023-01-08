import Component from '@glimmer/component';
import {action} from '@ember/object'

export default class DirtyModalComponent extends Component {
    @action onOk(){
        this.args.okAction();
    }

    @action onCancel(){
        this.args.cancelAction();
    }
}
