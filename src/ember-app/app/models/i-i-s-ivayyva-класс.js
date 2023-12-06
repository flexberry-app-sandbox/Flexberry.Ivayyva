import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлассMixin
} from '../mixins/regenerated/models/i-i-s-ivayyva-класс';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлассMixin, Validations, {
});

defineProjections(Model);

export default Model;
