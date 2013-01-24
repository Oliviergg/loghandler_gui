var Server = Backbone.Model.extend({
  paramRoot: 'servers',
  url: function() {
    var base = '/servers';
    if (this.isNew()) return base;
    return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
  },

});