/**
 * Created by Administrator on 8/29/2017.
 */

(function (window) {

    var arr = [10, 20, '30', 'xyz'];
    var arr2 = ['A', 'B', 'C'];
    //indexof
    // console.log('arr.indexOf(10) 元素10的索引为0', arr.indexOf(10)); // 元素10的索引为0
    // console.log('arr.indexOf(20) 元素20的索引为1', arr.indexOf(20)); // 元素20的索引为1
    // console.log('arr.indexOf(30) 元素30没有找到，返回-1', arr.indexOf(30)); // 元素30没有找到，返回-1
    // console.log('arr.indexOf("30") 元素“30”的索引为 返回2', arr.indexOf('30')); // 元素'30'的索引为 返回2


    // //slice

    // console.log(arr.slice(2));

    // arr.pop();
    // console.log(arr);

    // arr.push('xyz');
    // console.log(arr);


    var xiaoming = {
        name: '小明',
        birth: 1990,
        school: 'No.1 Middle School',
        height: 1.70,
        weight: 65,
        score: null,
        'heihei':"hahah"
    };

    console.log(xiaoming.school);
    console.log(xiaoming['school']);
    console.log(xiaoming['heihei']);
    console.log(xiaoming.heihei);

    console.log('name' in xiaoming);
    //由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性


})(window)