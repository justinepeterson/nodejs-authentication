//checking for authentications
module.exports = {
    ensureAuthenticated: function(req, res, next){
      if (req.isAuthenticated()) {
        return next();
      }else {
        // res.redirect('/users/login');
        res.send("Not authenticated access denied.")
      }
    }
  }