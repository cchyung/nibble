var loggedIn = false;

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

var Authorizer = {
  submitLogin: async function(email, password) {
    console.log('hello');
    // AuthService.login(username, password, this.authCallback(callback));
    try {
      fetch('https://trollow-backend.herokuapp.com/v1/auth/token/create/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          'email': email,
          'password': password
        }),
      })
      .then(ApiUtils.checkStatus)
      .then((response) => response.json())
      .then(async (response) => {
        console.log('login successful');
        console.log(response.auth_token);
        const value =
          await AsyncStorage.setItem('auth_token', response.auth_token);
        if (value === null) {
          let error = new Error('auth token storage value is null');
          throw error;
        }

      })
      .catch((error) => {
        // login not successful,
        // need to display error message on screen
      })
      .done();
    } catch (Error) {
      console.log('WAS NOT ABLE TO LOGIN');
    }
  },

  submitSignup: function(email, password) {
    console.log('hello0');
    // AuthService.signup(username, password, this.authCallback(callback));
    Authorizer.submitLogin(email, password);
  }
};

export default Authorizer;
