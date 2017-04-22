var app = angular.module('myApp', []);

app.service('myDataService', function ($http, $q) {
  
  var cachedResult = undefined;

  // process the data.json to data-to-display
  /* data-to-dispay : {
    name: 'provider name',
    description : 'provider description',
    pack : [
      { name : 'pack name', price: some_price, ... }
    ]
  }
  */
  var processData = function(input){
    return input;
    // var providers = {};
    // input.providers.forEach(function(element){
    //   providers[element.name] = element;
    // });

    // var data = {};
    // input.pack.forEach(function(element) {
    //   var p = element.provider;

    //   if(data[p] == undefined){
    //     // new provider with pack 
    //     data[p] = {
    //       name : providers[p].name,
    //       description : providers[p].description,
    //       pack : [element]
    //     }
    //   }else {
    //     // append pack to the provider
    //     data[p].pack.push(element);
    //   }
    // });

    // return {
    //   providers : providers,
    //   data : data
    // }
  };
  
  //--- Service Functions ---//
  return {
    loadAsync : function(){
      if(cachedResult == undefined) {
        return $http({
            method : 'GET',
            url : 'data.json',
            headers : {
              'Content-Type' : 'application/json'
            }
          }).then(function(response){
            cachedResult = processData(response.data)
            return cachedResult;
          });
      } else {
        return $q(function(resolve, reject){
          resolve(cachedResult);
        });
      }
    }
  }
});

