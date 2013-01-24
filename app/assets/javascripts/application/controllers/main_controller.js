var MainController={
  homepage: function(){
      // var layout = new App.Views.Homepage.Layout();
      var logview = new App.Views.LogDetails.Index({collection:app.global.logDetails});
      app.content.show(logview)
      // layout.show(logview);
      logview.render();
      
  },


};