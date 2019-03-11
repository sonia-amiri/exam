"use strict";

function sum(a) {

    return function(b) {
      return a + b; 
    };
  
  }
  
  
  console.log(sum(5)(-1));
  

  
  
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
  
  users.sort(byField('name'));
users.forEach(user => console.log(user.name));


users.sort(byField('age'));
users.forEach(user => console.log(user.name));