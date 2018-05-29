var keystone = require('keystone');

exports = module.exports = function(req, res){
    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Set locals
    locals.section = 'store';  //menuitem
    locals.filter = {
        product: req.params.product
    }
    local.data = {
        products:[]
    }

    // wenn dieser view initialisiert wird, dann run...
    view.on('init', function(next){
       var q = keystone.list('Product').model.findOne({
           slug: locals.filter.product  //bezieht sich auf das object oben..
       });

       q.exec(function(err, result){
           locals.data.product = result;
           next(err);
       });

    });

    // Render View
    view.render('products');
}