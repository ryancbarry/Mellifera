(function() {



  _.extend(Helpers, {

    // Creates a dummy user with a given `email` and `password`.
    // Returns the `userId` of the created user.
    // If one already exists with the given email, it just returns 
    // the userId of that user.
    createDummyUser: function(email, password) {
      var user = h_.findUserByEmail(email);
      var userId;
      if (_.isUndefined(user)) {

        if (_.isUndefined(password)) {
          password = 'password'
        }

        userId = Accounts.createUser({
          email: email,
          password: 'password'
        });
      }
      else {
        userId = user._id;
      }

      h_.timeAccount(userId);
      h_.activateTimeAccount(email);

      return userId;
    },



    runTests: function() {
      d_('Running tests');

      TimeAccounts.remove({});
      h_.createSharedTimeAccount();


      var azaeresId = this.createDummyUser('azaeres@gmail.com');
      var ryanbId = this.createDummyUser('ryanb@fullscreen.net');

      var azaeresTimeAccount = h_.timeAccount(azaeresId);
      var ryanbTimeAccount = h_.timeAccount(ryanbId);

      var expectation1 = {
        azaeres: {
          _id:azaeresTimeAccount._id,
          owner:azaeresId, 
          credit:azaeresTimeAccount.credit, 
          revenue:0,
          contributors:{},
          status:'active'
        },
        ryanb: {
          _id:ryanbTimeAccount._id,
          owner:ryanbId, 
          credit:ryanbTimeAccount.credit, 
          revenue:0,
          contributors:{},
          status:'active'
        }
      };

      var expectation2 = {
        azaeres: {
          _id:azaeresTimeAccount._id,
          owner:azaeresId, 
          credit:azaeresTimeAccount.credit + 10, 
          revenue:0,
          contributors:{},
          status:'active'
        },
        ryanb: {
          _id:ryanbTimeAccount._id,
          owner:ryanbId, 
          credit:ryanbTimeAccount.credit, 
          revenue:0,
          contributors:{},
          status:'active'
        }
      };
      expectation2.azaeres.contributors[azaeresTimeAccount._id] = { "amount" : 10 };


      (new SnapChain())

        .snap(function() {

          azaeresTimeAccount = h_.timeAccount(azaeresId);
          ryanbTimeAccount = h_.timeAccount(ryanbId);

          var result = {
            azaeres:azaeresTimeAccount,
            ryanb:ryanbTimeAccount
          };

          this.return(result);

        }, expectation1)


        .snap(function() {

          h_.contribute(azaeresTimeAccount._id, 10);

          this.return();

        }, expectation2)



    }


  });






})();