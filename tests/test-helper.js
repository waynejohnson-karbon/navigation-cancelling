import Application from 'navigation-cancelling/app';
import config from 'navigation-cancelling/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
