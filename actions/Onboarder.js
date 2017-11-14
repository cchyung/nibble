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

var Onboarder = {
  registerTruck: async function(title, description, genre, email, phone) {
    try {
      fetch('https://trollow-backend.herokuapp.com/v1/me/trucks//', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'need/to/figure/this/out'
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          'title': title,
          'description': description,
          'genre': genre,
          'email': email,
          'phone': phone
        }),
      })
      .then(ApiUtils.checkStatus)
      .then((response) => response.json())
      .then(async (response) => {
        console.log('creation successful');
        console.log(response);
        //figure out what to do with the truck here
      })
      .catch((error) => {
        // creation not successful,
        // need to display error message on screen
      })
      .done();
    } catch (Error) {
      console.log('WAS NOT ABLE TO CREATE TRUCK');
    }
  },

};

export default Authorizer;
