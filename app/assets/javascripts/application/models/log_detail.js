var LogDetail = Backbone.Model.extend({
  // paramRoot: 'diffusion',
  // url: function() {
  //   var base = '/diffusions';
  //   if (this.isNew()) return base;
  //   return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
  // },
  
  toJSON:function(){
    to_json = _.clone(this.attributes);
    to_json.filename = to_json.file.replace(/^.*[\\\/]/, '');
    to_json.timeAgo = timeAgo(to_json.logged_at);
    if(to_json.node_name == undefined){
      to_json.node_name=""
    }
    if(to_json.severity == undefined){
      to_json.severity="none"
    }

    return to_json
  }
  
});