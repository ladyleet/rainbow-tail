/* jshint node: true */
'use strict';

module.exports = {
  name: 'rainbow-tail',
  included: function(app) {
    app.import('vendor/rainbow-tail.css');
  }
};
