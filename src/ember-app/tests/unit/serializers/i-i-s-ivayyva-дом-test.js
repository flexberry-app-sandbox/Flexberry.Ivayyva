import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ivayyva-дом', 'Unit | Serializer | i-i-s-ivayyva-дом', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-ivayyva-дом',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-ivayyva-t-действие',

    'model:i-i-s-ivayyva-дом',
    'model:i-i-s-ivayyva-класс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
