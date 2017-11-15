var ApiUtils = {
  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      //error message handling here
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};

var Trucker = {
  getTruck: async function(uuid) {
    try {
      let url = 'https://trollow-backend.herokuapp.com/v1/trucks/' + uuid;
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'need/to/figure/this/out'
          'Content-Type': 'application/json'
        },
      })
      .then(ApiUtils.checkStatus)
      .then((response) => response.json())
      .then(async (response) => {
        console.log('truck retrival successful');
        console.log(response);
        //figure out what to do with the truck here
      })
      .catch((error) => {
        // creation not successful,
        // need to display error message on screen
      })
      .done();
    } catch (Error) {
      console.log('WAS NOT ABLE TO GET TRUCK');
    }
  },

};

export default Authorizer;
