/**
 * Created by Administrator on 8/29/2017.
 */
(function(window){
    // function abs1(x) {
    //     if (x >= 0) {
    //         return x;
    //     } else {
    //         return -x;
    //     }
    // }
    // console.log(typeof abs1); //  function
    // console.log(typeof abs2); //  undefined
    // var abs2 = function (x) {
    //     if (x >= 0) {
    //         return x;
    //     } else {
    //         return -x;
    //     }
    // };

     // console.log(abs1(-2));
     // console.log(abs2(4));


    //arguments

    function argfun(fn){
        // var a = arguments[0];
        // var b = arguments[1];
        // console.log(typeof arguments); 
        // console.log(arguments);
        // console.log(typeof fn()); // 
    }

    argfun(function(){
        alert(1);
    });

    function foo3(){
        alert(1);
        // return this;
    }

    // console.log(typeof foo3());  //un...
    var rs5 = new foo3();
    console.log(typeof rs5); //
})(window);