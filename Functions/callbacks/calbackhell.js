//the code becomes deeply nested and harder to read and maintain, especially when additional operations or error handling are added.
//excessive nesting of callback
//to avoid callbakc we use promises

function asyncOperation1(callback) {
    setTimeout(() => {
      console.log("Async Operation 1");
      callback();
    }, 1000);
  }
  
  function asyncOperation2(callback) {
    setTimeout(() => {
      console.log("Async Operation 2");
      callback();
    }, 1000);
  }
  
  function asyncOperation3(callback) {
    setTimeout(() => {
      console.log("Async Operation 3");
      callback();
    }, 1000);
  }
  
  function asyncOperation4(callback) {
    setTimeout(() => {
      console.log("Async Operation 4");
      callback();
    }, 1000);
  }
  
  function asyncOperation5(callback) {
    setTimeout(() => {
      console.log("Async Operation 5");
      callback();
    }, 1000);
  }
  
  // Callback hell example
  asyncOperation1(() => { //for async 1 , async 2 is passed as call back and similarly others too
    asyncOperation2(() => {
      asyncOperation3(() => {
        asyncOperation4(() => {
          asyncOperation5(() => {
            console.log("All operations completed.");
          });
        });
      });
    });
  });
 
  
  