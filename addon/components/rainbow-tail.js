import Ember from 'ember';
import layout from '../templates/components/rainbow-tail';

const COLORS = [
  'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'
];

export default Ember.Component.extend({
  layout: layout,
  draws: Ember.computed(function() {
    return 0;
  }),
  rainbowClass: null,
  // Does not have pushObject because prototype extensions are off
  tails: Ember.computed(function() {
    return Ember.A();
  }),

  didInsertElement(){
    let selector = 'button';
    if (this.get('rainbowClass')) {
      selector = `.${this.get('rainbowClass')}`;
    }
    Ember.$(selector).click(() => {
      this.set('enabled', true);
    });

    Ember.$('body').on('mousemove', (e) => {
      if (!this.get('enabled')) {
        return;
      }

      let tails = this.get('tails');
      let draws = this.incrementProperty('draws');
      let color = COLORS[draws % COLORS.length];

      if (draws ===  150) {
        this.set('draws', 0);
        this.set('enabled', false);
        this.set('tails', Ember.A());
        return;
      }

      tails.pushObject({
        top: e.clientY, left: e.clientX, color: color
      });

      if (this.get('tails').length >20) {
        this.get('tails').removeAt(0);
      }
    });
  }
});
