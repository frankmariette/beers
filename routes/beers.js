exports.findAll = function(req, res) {
  res.send([{name: 'beer1'}, {name: 'beer2'}, {name:'beer3'}]);
};

exports.findById = function(req, res){
  res.send({id:req.params.id, name: "The name", description: "description"});
};
