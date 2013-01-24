App.Views.LogDetails = App.Views.LogDetails || {};

App.Views.LogDetails.Index = Backbone.Marionette.CollectionView.extend({
  getItemView: function(){return App.Views.LogDetails.Show},
  tagName: "table",
  id:"#log_details",
  initialize:function(params){
  },
  collectionEvents:{
    "add":"collectionAdded"
  },
  appendHtml: function(cv, iv){
    cv.$el.prepend(iv.el);
  },
  collectionAdded:function(){
    console.log("added");
  }
  
})