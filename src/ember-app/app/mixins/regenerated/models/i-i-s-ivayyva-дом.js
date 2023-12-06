import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тип: DS.attr('number'),
  класс: DS.belongsTo('i-i-s-ivayyva-класс', { inverse: null, async: false })
});

export let ValidationRules = {
  тип: {
    descriptionKey: 'models.i-i-s-ivayyva-дом.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  класс: {
    descriptionKey: 'models.i-i-s-ivayyva-дом.validations.класс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДомE', 'i-i-s-ivayyva-дом', {
    тип: attr('Тип', { index: 0 }),
    класс: belongsTo('i-i-s-ivayyva-класс', 'Класс', {
      действие: attr('Действие', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'действие' })
  });

  modelClass.defineProjection('ДомL', 'i-i-s-ivayyva-дом', {
    тип: attr('Тип', { index: 0 }),
    класс: belongsTo('i-i-s-ivayyva-класс', 'Действие', {
      действие: attr('Действие', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
