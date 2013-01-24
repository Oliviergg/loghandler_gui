var MainController={
  homepage: function(){
      // var layout = new App.Views.Homepage.Layout();
      
  },
  server: function(id){
    debugger
    s=new Server({id:id});
    s.fetch({async:false})
    var ws = new Socket(["ws://",s.get("name"),":",s.get("port")].join(""));
    ws.onmessage = function(evt) {
      app.global.logDetails.add(JSON.parse(evt.data))
      console.log("-Message: " + evt.data); 
    };
    ws.onclose = function() { 
      console.log("closed");
      // debug("-socket closed"); 
    };
    ws.onopen = function() { 
      console.log("connected");
      // debug("connected...");
      //    // this.send("-hello server");
     };

    
    var logview = new App.Views.LogDetails.Index({collection:app.global.logDetails});
    app.content.show(logview)
    // layout.show(logview);
    logview.render();
    
  }

};