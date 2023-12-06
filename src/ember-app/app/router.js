import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ivayyva-дом-l');
  this.route('i-i-s-ivayyva-дом-e',
  { path: 'i-i-s-ivayyva-дом-e/:id' });
  this.route('i-i-s-ivayyva-дом-e.new',
  { path: 'i-i-s-ivayyva-дом-e/new' });
  this.route('i-i-s-ivayyva-класс-l');
  this.route('i-i-s-ivayyva-класс-e',
  { path: 'i-i-s-ivayyva-класс-e/:id' });
  this.route('i-i-s-ivayyva-класс-e.new',
  { path: 'i-i-s-ivayyva-класс-e/new' });
});

export default Router;
