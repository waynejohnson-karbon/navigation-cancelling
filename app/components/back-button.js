import Component from '@glimmer/component';
import {action} from '@ember/object'

export default class BackButtonComponent extends Component {
    @action backClicked(){
        window.history.back();
    }
}
