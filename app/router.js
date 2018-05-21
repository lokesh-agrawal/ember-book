import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('home', { path: '/' });
  this.route('book', function() {
    this.route('view');
  });
  this.route('user');
  this.route('about');
  this.route('contact');
  this.route('signin');
});

export default Router;
