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
      const auth_token = await AsyncStorage.getItem('auth_token');
      if (auth_token !== null) {
        let url = 'https://trollow-backend.herokuapp.com/v1/trucks/' + uuid;
        fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': auth_token
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
      } else {
        console.log('throwing my own error here');
        let error = new Error('auth_token retrieved was null');
        throw error;
      }
    } catch (error) {
      console.log('was not able to get truck or getting auth_token didnt work');
    }
  },

};

export default Authorizer;
