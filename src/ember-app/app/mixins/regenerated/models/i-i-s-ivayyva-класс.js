import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  действие: DS.attr('i-i-s-ivayyva-t-действие')
});

export let ValidationRules = {
  действие: {
    descriptionKey: 'models.i-i-s-ivayyva-класс.validations.действие.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлассE', 'i-i-s-ivayyva-класс', {
    действие: attr('Действие', { index: 0 })
  });

  modelClass.defineProjection('КлассL', 'i-i-s-ivayyva-класс', {
    действие: attr('Действие', { index: 0 })
  });
};
