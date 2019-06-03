// feat(es6): 新增箭头函数
//箭头函数
var example = p => {
    console.log(p);
}
example(123)


//是因为在一个对象内部，this指向的是这个对象，
// 而在普通函数内部，this指向的是window对象。所以不能在普通函数里面用this来访问对象的属性
// 在对象内部定义的匿名函数的this指针也是指向window对象，而不是该对象
// var param = 'hello'
// var obj = {
//     param: 'world',
//     method1: function () {
//         console.log(this.param);
//         function f() {
//             console.log(this.param);
//         }
//         f()
//     },
//     method2: function(){
//         setTimeout(function () {
//             console.log(this.param);
//         },1000)
//     }
// }
// obj.method1() //log world
// obj.method2() //浏览器 log hello; node log undefined

// var param = 'hello'
// // var obj = {
// //     param: 'world',
// //     method1: function () {
// //         console.log(this.param);
// //         var self = this
// //         function f() {
// //             console.log(self.param);
// //         }
// //         f()
// //     },
// //     method2: function(){
// //         var self = this
// //         setTimeout(function () {
// //             console.log(self);
// //             console.log(self.param);
// //         },1000)
// //     }
// // }
// // obj.method1() //log world
// // obj.method2() //浏览器 log hello; node log undefined

//箭头函数不会创建闭包
var param = 'hello'
var obj = {
    param: 'world',
    method1: function () {
        console.log(this.param);
        var f = ()=>{
            console.log(this.param);
        }
        f()
    },
    method2: function(){
        setTimeout(() => {
            console.log(this.param);
        },1000)
    }
}
obj.method1() //log world
obj.method2() //浏览器 log hello; node log undefined

//箭头函数的写法
var double = (value) => {
    return value * 2
}

var double = value =>{
    return value * 2
}

var double = value => value * 3
console.log(double(2));

//隐式返回对象字面量 需用（）包裹
var obj = () => ({modular: 'es6'})
console.log(obj());

var map = [1,2,3].map(value => ({number: value}))
console.log(map);

//箭头函数优点和用例
// 1. 箭头函数更适合简短实例
// 2. 当需要定义任何情况下词法作用域都不改变的匿名函数
// 3. 函数式编程
var result = [1,2,3,4]
    .map(value => value *2)
    .filter(value => value >2)
    .reduce((pre,cur)=> pre + cur)
console.log(result);
