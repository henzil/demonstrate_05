/**
 * Created by JetBrains WebStorm.
 * User: henzil
 * Date: 12-9-15
 * Time: 下午1:39
 * 测试 null  和 undefined 的区别
 */

var constants = new (function () {
    var pageSize = 10;
    this.getPageSize=function(){
        return pageSize;
    }
})();


function testNullAndUndefined(){

    //    var a;
//
//    var b;
//
//    console.log('a == null is :'+(a==null));
//    console.log('a == undefined is :'+(a==undefined));
//
//    console.log('null == undefined  is : '+(null == undefined));
//    console.log('null === undefined  is : '+(null === undefined));
//    console.log('a === b  is : '+(a === b));


//    //syntaxError: At least one digit must occur after a decimal point
//    console.log('2..toString() : ' + 2..toString());
    var user;
    console.log(user);//undefined
    if(!user)console.log('user is null');
    if(user==null)console.log('user is null');
    if(user!==null)console.log('user is not null');
    if(user==undefined)console.log('user is undefined');
    user=null;
    if(user!==undefined)console.log('user is not undefined');


    var user;
    var otherUser = user||'default user';
    console.log(otherUser);


}

function print_requestAnimationFrame(){
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };

    console.log(requestAnimationFrame.toString());
}


function printDefaultValue(){
    console.log(constants.getPageSize());
}

function printGlobalValue(){
    console.log(pageSize);
}