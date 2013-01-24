function timeAgo(date){
  var d=new Date(date);
  var di=+new Date(date);
  var nowi=+new Date();
  var delta = (nowi -di)/1000;
  if(delta < 3600){
    return moment(date).format("HH:mm")
  }else{
    if(moment(d).format("YYMMDD") == moment().format("YYMMDD")){
      return moment(d).format("[aujourd'hui] HH:mm")
    }else if(delta<(3600*24)){
      return moment(d).format("[hier] HH:mm")      
    }else if(delta<(3600*24*3)){
      return moment(d).format("dddd HH:mm")      
    }else{
      return moment(d).format("DD/MM HH:mm")            
    }
  }

}
Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
$(function() {
  Backbone.Model.prototype._super = function(funcName){
      return this.constructor.__super__[funcName].apply(this, _.rest(arguments));
  }

  Backbone.Marionette.Renderer.render = function(template, data){
    return JST[template](data);
  }


  app = new Backbone.Marionette.Application();
  
  app.global={
    logDetails: new App.Collections.LogDetails()
  };

  app.addRegions({
    header: "header",
    content: ".content",
    player: "#player"
  })

  app.addInitializer(function(options){
      this.router = new MyAppRouter();
      Backbone.history.start({pushState: true});
  });

  app.addInitializer(function(options){
  });
  
  

  // App.init();
  // app=new App.Router();
  app.root = "/";

  $(document).ajaxError(function(event, request) {
  });


  $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
      // Get the absolute anchor href.
      var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
      // Get the absolute root.
      var root = location.protocol + "//" + location.host + app.root;

      // Ensure the root is part of the anchor href, meaning it's relative.
      if (href.prop.slice(0, root.length) === root) {
        // Stop the default event to ensure the link will not cause a page
        // refresh.
        evt.preventDefault();

        // `Backbone.history.navigate` is sufficient for all Routers and will
        // trigger the correct events. The Router's internal `navigate` method
        // calls this anyways.  The fragment is sliced from the root.
        options ={trigger:true,replace:false};
        // if ($(this).attr("data-nohistory") != undefined){
        //  options.replace=true;
        // }
        Backbone.history.navigate(href.attr, options);
      }
  });

  app.start();

});
