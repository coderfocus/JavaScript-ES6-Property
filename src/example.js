var double = value => value * 2;
// console.log(double(3));
console.log(double(2));

//可计算属性名
//1.一个对象添加到另一个对象中，直接在对象字面量中进行内联声明
var person = {
    code: 123,
    name: 'song'
}
var persons = {
    [person.code]: person
}
console.log(persons);

//2.一个函数接受一个参数，然后使用该参数构建对象

//ES5
function getEnvelope(type,message) {
    var envelope = {
        data: {}
    }
    envelope[type] = message
    return envelope
}

console.log(getEnvelope('success', '成功'));
console.log(getEnvelope('error', '失败'));

//ES6
// function getEnvelope(type,message) {
//     return {
//         data:{},
//         [type]:message
//     }
// }
//
// console.log(getEnvelope('success', '成功'));
// console.log(getEnvelope('error', '失败'));







