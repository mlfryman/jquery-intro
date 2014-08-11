
// function declaration
function hello(){
  'use strict';
  var b = 0,
      c = -1;
  console.log(b,c);
}
hello();

// iffe function: creates and calls function
(function hello(){
  'use strict';
  var b = 0,
      c = -1;
  console.log(b,c);
})();
