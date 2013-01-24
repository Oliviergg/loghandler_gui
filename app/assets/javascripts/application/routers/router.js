var MyAppRouter = Backbone.Marionette.AppRouter.extend({
  controller: MainController,
  appRoutes: {
    "": "homepage",
    "server/:id": "server",

  },

})