import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('compose-modal', 'Integration | Component | compose modal', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{compose-modal}}`);

  // Check if the rendered component contains exactly one button with the class "chirp"
  assert.equal(this.$().find('button.chirp').length, '1');

  // Check if the rendered component contains one textarea
  assert.equal(this.$().find('textarea').length, '1');
});

test('long text makes label red', function(assert) {
  var longText = 'Lorem ipsum dolor sit amet, eam ex cibo elitr tamquam. Nusquam adipiscing ea sea, habemus minimum vis cu. Pri ponderum percipitur ex, eu mei tamquam eloquentiam. Ius apeirian insolens ea.';

  this.set('chirpText', longText);
  this.render(hbs`{{compose-modal chirpText=chirpText}}`);

  assert.ok(this.$().find('p.remaining-chars').hasClass('warning'));
});
