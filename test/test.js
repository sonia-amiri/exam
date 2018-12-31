let assert = require('chai').assert;


let str;
function ucFirst(str){
  if(str===""){
    return str;
  }
  return str[0].toUpperCase()+str.slice(1);
}

describe('ucFirst',function(){
  it('str with first character to uppercase',function(){
    ucFirst("jhon");
    assert.strictEqual(ucFirst("jhon"),"Jhon");
  });
  it('when str is empty',function(){
    ucFirst("");
    assert.strictEqual(ucFirst(""),"");
  });
});

let stri;
let maxlength ;
function truncate(stri, maxlength) {
  if(stri.length > maxlength) {
    return stri.slice(0, maxlength -1 ) + '…';
  } else {
    return stri;
  }
}
describe('truncate',function(){
  it('truncate stri to shorter string',function(){
    assert.equal(truncate("What I'd like to tell on this topic is:",20),"What I'd like to te…");
  });
  it('does not change stri',function(){
    assert.equal( truncate("Hi everyone!", 20), "Hi everyone!") 
  });
});



let string; // don't name your variables string
function extractCurrencyValue(string){
  return Number(string.slice(1));
}
describe('extractCurrencyValue',function(){
  it('extract the numeric value',function(){
    extractCurrencyValue('$120');
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });
});
