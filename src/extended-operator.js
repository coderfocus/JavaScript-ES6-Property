//+++++++++++++++++++++++++++++++++
//扩展运算符
//扩展运算符可以将可遍历对象转换为数组
//可遍历是 ES6 引入的一种机制，允许我们将对象转换为可遍历的内容

function cast() {
    return [...arguments]
}
console.log(cast('a', 'b', 'c'));

//将字符串分割成数组
console.log([...'show me']);

//拼接多个数字
var all = [1,...[2,3],4,...[5],6,7]
console.log(all);


//在 ES6 之前，当某个函数调用的参数是动态的参数列表时，通常会使用 .apply 方法

//在函数调用时使用扩展运算符,本质还是.apply 方法
function multiply(left,right) {
    return left * right
}
var result = multiply(...'23')
// var result = multiply(...[2,3])
console.log(result);

//使用剩余参数和扩展运算符 简化代码
function print(...list) {
    console.log(list);
}
print(1,...[2,3],4,...[5])
