import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rainbow-tail-square', 'Integration | Component | rainbow tail square', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{rainbow-tail-square}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#rainbow-tail-square}}
      template block text
    {{/rainbow-tail-square}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
