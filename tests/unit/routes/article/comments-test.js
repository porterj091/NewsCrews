import { moduleFor, test } from 'ember-qunit';

moduleFor('route:article/comments', 'Unit | Route | article/comments', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
