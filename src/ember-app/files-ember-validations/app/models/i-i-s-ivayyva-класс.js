import {
  defineNamespace,
  defineProjections,
  Model as КлассMixin
} from '../mixins/regenerated/models/i-i-s-ivayyva-класс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлассMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
