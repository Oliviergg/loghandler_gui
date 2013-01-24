App.Views.Homepage = App.Views.Homepage || {};

App.Views.Homepage.Layout = Backbone.Marionette.Layout.extend({	
  template:"application/templates/homepage/layout",
  regions:{
      logDetails:"#log_details",
  },
})