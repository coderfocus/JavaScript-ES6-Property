//解构可以将对象的属性值绑定到任意数量的变量
//解构可以用于对象、数组以及函数参数列表

//++++++++++++++++++++++++++++++++++++++++++++
//对象解构
var people = {
    name: 'song',
    nickname: 'coderfocus',
    metaData:{
        age: 25,
        gender: 'male'
    }
}
var name = people.name

//解构赋值
var {name} = people
console.log(name);

//同时解构多个属性
var {name,nickname} = people
console.log(name + '-' + nickname);

//解构别名
var {name: lastname} = people
console.log(lastname);

//解构深度结构
var {metaData: {age} } = people
console.log(age);

//解构不存在的属性返回 undefined
var {boots} = people
console.log(boots);

// 解构嵌套属性的父对象是null或者undefined，抛出异常
// var {boots: {size}} = people

//默认值
var {boots = {size:10}} = people
console.log(boots);

//嵌套属性默认值
var {metaData: {size = 10}} = people
console.log(size);

//++++++++++++++++++++++++++++++++++++++++++++++++++
//数组解构
var coordinates = [12,-5]
var [x,y] = coordinates
console.log(x);
console.log(y);

//跳过不需要的值
var names = ['song','wen','jie']
var [firstname, ,lastname] = names
console.log(lastname);

//默认值
var [firstname, , ,lastname = 'song'] = names
console.log(lastname);

//利用数组解构交换变量值
var left = 5;
var right = 7;
[left,right] = [right,left]
console.log(left);
console.log(right);
