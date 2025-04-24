//strict mode
// 'use strict'

var name = 'jenny';
function a(){
  return this.name;
}
console.log(a.bind({name: 'jen'})());
