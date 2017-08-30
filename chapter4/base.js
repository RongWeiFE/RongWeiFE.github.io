/**
 * Created by Administrator on 8/29/2017.
 */
(function(window){
    window.s = 1;
    //function
    //数据类型
    function getType(str){
        return typeof str;
    }

    //字符串相加
    function stradd(str1,str2){
        return str1+str2;
    }

    //字符串长度
    function strlength(str){
        return str.length;
    }

    function strArr(str){
        var length = strlength(str);
        for(var i=0;i<length;i++){
            console.log(str[i]);
        }
    }

    function strIndex(str,find){
        return str.indexOf(find);
    }

    function strsubstring(str,start,end=-1){
        if(end !== -1){
            return str.substring(start,end)
        }
        else{
            return str.substring(start)
        }
    }
    //use

    //1
    // console.log(getType(1));
    // console.log(getType('1'));
    // console.log(getType([1,2]));
    // console.log(getType({a:1}));
    // function test(){
    //     return 0;
    // }
    // console.log(getType(test));
    // console.log(getType(test()));

    //2
    // console.log(stradd('a','bv'));
    // console.log(stradd('1','2'));
    // console.log(stradd(1,'2'));
    // console.log(stradd(1,2));

    //3
    //console.log(strlength('asd')); // 
     // str.length;

    //4

   // var s = "world";
    // // strArr(s);
    // // var arr = [1,2]
    // s[0] = 'A';
    // // arr[0] = 3;
    // strArr(s);
    //5
    // var str = 'hello world';
    // var findstr = 'l';// indexOf()
    // console.log(strIndex(str,findstr));

    //6

    // var str = 'helloworld';
    // // String.prototype.substring = function(start,end){

    // // }
    // console.log(str.substring(0,5));


})(window)

console.log(s);