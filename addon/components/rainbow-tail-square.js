import Ember from 'ember';
import layout from '../templates/components/rainbow-tail-square';

const { computed, getProperties } = Ember;

export default Ember.Component.extend({
    layout: layout,
    tagName: "",
    style: computed('top', 'left', 'color', function() {
      let { top, left, color} = getProperties(this, 'top', 'left', 'color');
      return Ember.String.htmlSafe(`top: ${top}px; left: ${left}px; color: ${color}`);
    })
});
