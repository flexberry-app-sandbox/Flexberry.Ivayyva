import {
  defineNamespace,
  defineProjections,
  Model as ДомMixin
} from '../mixins/regenerated/models/i-i-s-ivayyva-дом';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДомMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
