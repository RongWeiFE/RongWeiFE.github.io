(function(window){
    // if(1===1){
    //     console.log('right');
    // }
    // var s = '1';

    // switch(s){
    //     case '2':
    //         console.log(2);
    //         break;
    //     case "1":
    //         console.log(1);
    //         break;
    //     default:
    //         console.log(3);
    // }


    var arr = [10, 20, '30', 'xyz'];

    // arr.forEach(function(index){
    //     console.log(index);
    // });

    arr.map(function(index){
        console.log(index);
    });

    var arr2= [4,2,1,6,8,7];
    var arr3 = ['asd','sdf','dfg'];

    var rs = arr2.sort(function(a,b){
        return a<b;
    });

    var rs2 = arr2.filter(function(index) {
        return index%2==1;
    });

    var rs3= arr3.filter(function(index) {
        return index.indexOf('d')>=0;
    });
    var rs4 = arr2.reduce(function(a,b){
        return a*b;
    });


    // console.log(rs4);


    // for(var i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    // }

    // var n=10;

    // while(n>0){
    //    var s = "";
    //    for(var i=0;i<n;i++){
    //         s += "*";
    //    }
    //    console.log(s);
    //    n--;
    // }



})(window)