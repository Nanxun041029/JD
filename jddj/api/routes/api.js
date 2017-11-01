var express = require('express');
var router = express.Router();
var user = require('../model/user');
router.post("/one",function(req,res){
	// res.send("OK")
	user.find({
		username:req.body.username,
		password:req.body.password
	},function(error,result){
		if(!error){
			if(result.length == 0){
				user.create({
					username:req.body.username,
					password:req.body.password
				},function(error,result){
					if(!error){
						res.send(true);
					}else{
						res.send(false);
					}
				})
			}else{
				res.send(false)
			}
		} else {
			console.log(error);
			res.send("error")
		}
	})
})
router.post("/two",function(req,res){
  user.find({
    username:req.body.username,
    password:req.body.password
  },function(error,result){
    if(!error){
      if(result.length > 0){
      	req.session.dasb = result[0];
        res.cookie('userId',result[0].username);
        res.send(true);

      }else {
        res.send(false)
      }
    }else{
      res.send(false)
    }
  })
});

module.exports = router;

// var express = require('express');
// var router = express.Router();
// var User = require('../model/user');
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('register', { title: 'register' });
// });
// router.post('/',function(req,res){
//     User.create({
//         username:req.body.username,
//         password:req.body.password
//     },function(error,result){
//         if(!error){
//         res.redirect('/login')
//         }else{
//             console.log(error)
//         }
//     })
// });

// module.exports = router;
