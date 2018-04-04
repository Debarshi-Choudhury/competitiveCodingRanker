var codechefProfile = require('./codechefProfile');

var codechefFunc = function(username,callback){
  // console.log("hey "+username);
  codechefProfile.codechefProfileFunc(username,function(err,data){
    if(err){
      // console.log(err);
      return callback(err);
    }

    return callback(null,data);
  });
}

//for Testing Purpose
codechefFunc('ryuga777',(err,data)=>{
  console.log(JSON.stringify(data,null,2));
});

module.exports = {
  codechefFunc
};
