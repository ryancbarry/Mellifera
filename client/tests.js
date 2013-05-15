Template.tests.helpers({
  // accountActive: function() {
  //   var currentPage = Session.get('currentPage');
  //   var result = (currentPage === 'account') ? ' active' : '';
  //   return result;
  // },
  // testsActive: function() {
  //   var currentPage = Session.get('currentPage');
  //   var result = (currentPage === 'tests') ? ' active' : '';
  //   return result;
  // }
  // tests: function() {
  //   return Tests.find();
  // },
  // test1: function() {
  //   var result = { describe:'Value should be a string... ', success:false, error:null };

  //   try {
  //     chai.expect('1').to.be.a('string');
  //     result.success = true;
  //   }
  //   catch(e) {
  //     // d_(e);
  //     result.error = e;
  //   }

  //   return result.success ? result.describe + 'Success' : result.describe + 'Failed: ' + result.error.message;
  // },
  // test2: function() {

  // }
});

Template.tests.rendered = function() {
  $('#navigation .account a').click(function(e) {
    e.preventDefault();
    AppRouter.navigate('', { trigger:true });
  });
  $('#navigation .tests a').click(function(e) {
    e.preventDefault();
    AppRouter.navigate('tests', { trigger:true });
  });
};




(function() {

  // var snapshot = { foo:'bar' };
  // var anotherSnapshot = { bar:'baz' };

  // (new SnapChain('First chain'))

  // .snap('Initial state', function() {


  //   this.return({
  //     gather: function() {
  //       this.return(snapshot);
  //     }, 
  //     expect: {
  //       foo:'bar'
  //     }
  //   });

  // })

  // .snap('Setting foo to "a"', function() {

  //   snapshot.foo = 'a';

  //   this.return({
  //     expect: {
  //       foo:'a'
  //     }
  //   });

  // })

  // .snap('Setting foo to 12', function() {

  //   snapshot.foo = 12;

  //   this.result = {
  //     expect: {
  //       foo:12
  //     }
  //   };

  //   this.return(this.result);

  // })

  // .snap('Setting foo to "blah"', function() {

  //   snapshot.foo = 'blah';

  //   this.return({
  //     expect: {
  //       foo:'blah'
  //     }
  //   });

  // })

  // .snap('Setting ignored state', function() {

  //   anotherSnapshot.bar = 23;

  //   this.return({
  //     expect: {
  //       foo:12
  //     }
  //   });

  // });


  // snapshot2 = { foo:'bar' };

  // (new SnapChain('Second chain'))

  // .snap(function() {

  //   this.expect = {
  //     foo:'bar'
  //   };

  //   this.return({
  //     gather: function() {
  //       this.return(snapshot2);
  //     }, 
  //     expect: this.expect
  //   });

  // })

  // .snap(function() {

  //   this.return({
  //     expect: this.expect
  //   });

  // })

  // .snap(function() {

  //   snapshot2.foo = 12;
  //   this.expect.foo = '12';

  //   this.return({
  //     expect: this.expect
  //   });

  // })

  // .snap(function() {

  //   this.return({
  //     expect: this.expect
  //   });

  // })





  // var snapshot = { 
  //   a: 2,
  //   foo: 'bar'
  // };

  // var chain = new SnapChain();

  //   chain.startGroup('Constraining snap itself')

  //   .snap(function() {
  //     // console.log('gathering state');
  //     // console.log(snapshot);

  //     // console.log('gathering state... call a() to simulate response');
  //     // var that = this;
  //     // a = function() {
  //     //   that.return(snapshot);
  //     // };

  //     var state = chain.state();
  //     var result = {
  //       snaps: state.snaps,
  //       snapshot: snapshot
  //     };

  //     this.return(result);
  //   }, {
  //     snaps: 0,
  //     snapshot: { a:2, foo:'bar' }
  //   })

  //   .snap(function() {
  //     // console.log(this);
  //     snapshot.a = 4;

  //     // console.log('mutating state... call b() to simulate response');
  //     // var that = this;
  //     // b = function() {
  //     //   that.return();
  //     // };

  //     this.return();

  //   }, {
  //     snaps: 0,
  //     snapshot: { a:5, foo:'bar' }
  //   })


  //   .snap(function() {
  //     // console.log(this);
  //     snapshot.a = 5;

  //     // console.log('mutating state... call c() to simulate response');
  //     // var that = this;
  //     // c = function() {
  //     //   that.return();
  //     // };

  //     this.return();

  //   }, {
  //     snaps: 1,
  //     snapshot: { a:5, foo:'bar' }
  //   })

  //   .endGroup();


    // var state = chain.state();
    // console.log(state.snaps);


  // (new SnapChain())

  //   .startGroup('Snap chain')

  //     .snap(function() {
  //       // console.log('gathering state... call a() to simulate response');
  //       // var that = this;
  //       // a = function() {
  //       //   that.return(snapshot);
  //       // };

  //       console.log('gathering state');
  //       // console.log(snapshot);

  //       this.return(snapshot);

  //     }, {
  //       a: 4, 
  //       foo: 'bar'
  //     })

  //     .snap(function() {
  //       // console.log(this);
  //       snapshot.a = 4;

  //       console.log('mutating state... call b() to simulate response');
  //       var that = this;
  //       b = function() {
  //         that.return();
  //       };

  //       console.log('mutating state');
  //       // this.return();

  //     }, { a:5, foo:'bar' })


  //     .snap(function() {
  //       // console.log(this);
  //       snapshot.a = 4;

  //       console.log('mutating state... call c() to simulate response');
  //       var that = this;
  //       c = function() {
  //         that.return();
  //       };

  //       console.log('mutating state');
  //       // this.return();

  //     }, { a:4, foo:'bar' })

  //   .endGroup();





  // var s = Snap.state();
  // console.log(s);

  // Snap().startGroup('Constraining snap')

  //   .snap(function() {
  //     var state = Snap.state();
  //     this.return(state);
  //   }, {
  //     linkIndex: 0
  //   })

  //   .snap(function() {

  //     var snapshot = {
  //       a: 2,
  //       foo: 'bar'
  //     };

  //     Snap(function() {

  //         // console.log('gathering state... call a() to simulate response');
  //         // var that = this;
  //         // a = function() {
  //         //   that.return(snapshot);
  //         // };

  //         console.log('gathering state');
  //         console.log(snapshot);

  //         this.return(snapshot);

  //       }, {
  //         a: 3, 
  //         foo: 'bar'
  //       }, 'Another thing to try!')

  //   }, {

  //   })

  // .endGroup();

  





})();
