import EmberRouter from '@ember/routing/router';
import config from 'navigation-cancelling/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
});
