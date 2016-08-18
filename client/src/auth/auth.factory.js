app.factory('Auth', function($http, $localStorage, $q){
  return {
    // Register/Login
    authenticate: function(creds){
      return $http.post('/api/auth/authenticate', creds)
      .then(function(resp){
        $localStorage.token = resp.data;
        return resp;
      }).catch(function(err){return err});
    },
    // Get Current User
    current: function(){
      return $http.get('/api/auth/current')
      .then(function(resp){return resp})
      .catch(function(err){return err});
    },
    // Logout/Remove token from storage
    logout: function(){
      return $q(function(resolve, reject){
        delete $localStorage.token;
        if(!$localStorage.token){
          resolve('token deleted');
        } else {reject('could not delete token')};
      })
    }
  }
});
