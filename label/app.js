var app = angular.module('myApp', []);

app.service('myDataService', function () {
  //--- Initial data ---//
  var data = {
    // promotion_data
    "TMH": {
      name: "TrueMove H",
      description: "TrueMove H Internet Package",
      pack: [
        {
          name: "เน็ต 100 MB",
          price: 9.0,
          duration: 1,
          ussd: "*900*1*567890#",
          conditions: [
            "โปรเน็ตทรูมูฟ เอช 100 MB",
            "ใช้ได้ถึง เวลา 23.59น ของวันที่สมัคร"
          ]
        },
        {
          name: "เน็ต 200 MB",
          price: 15.0,
          duration: 1,
          ussd: "*900*2*567890#",
          conditions: [
            "โปรเน็ตทรูมูฟ เอช 200 MB",
            "ใช้ได้ถึง เวลา 23.59น ของวันที่สมัคร"
          ]
        },
        {
          name: "เน็ต 1.5 GB",
          price: 199.0,
          duration: 30,
          ussd: "*900*3*567890#",
          flag: 1,
          conditions: [
            "โปรเน็ตทรูมูฟ เอช 1.5 GB",
            "ใช้ได้ถึง เวลา 23.59น ของวันที่ครบ 30 วัน"
          ]
        }
      ]
    }
  };

  //--- Service Functions ---//
  return {
    // Get data
    get: function () {
      return data;
    },
    search: function(query){
      // search on data
    },
    reload: function(){
      // reload data from 'source'
    }
  }
});

