//++++++++++++++++++++++++++++++++++++++++++++++++
//函数参数的默认值
function powerOf(base,exponent = 2) {
    return Math.pow(base,exponent)
}

console.log(powerOf(2));
console.log(powerOf(2, undefined));
console.log(powerOf(2, 3));

var double = (value = 0) => value * 2
console.log(double());
console.log(double(2));

//对象参数默认值
// var defaultOption = {
//     brand: 'volvo',
//     make: 2019
// }
// function carFactory(option = defaultOption) {
//     console.log(option.brand);
//     console.log(option.make);
// }
// carFactory()
// //volvo
// //2019
//
// //如果传入一个对象参数，则所有的默认值都会失效
// carFactory({})
// // undefined
// // undefined
//
// carFactory({make: 2010})
// // undefined
// // 2010

//与提供一个默认参数相比，更好的办法是使用解构，并在解构模式中为每一个属性指定默认值
function carFactory({brand = 'volvo',make = 2019}) {
    console.log(brand);
    console.log(make);
}

// carFactory({})
// // volvo
// // 2019
//
// carFactory({make: 2010})
// // volvo
// // 2010
//
// carFactory()
// //Exception


// 添加一个空对象作为默认值可避免该问题，因为解构空对象时已经提供了默认值
function carFactory({brand = 'volvo',make = 2019} = {}) {
    console.log(brand);
    console.log(make);
}

carFactory()
// volvo
// 2019

//只想在某个函数中提取对象的某些属性作为参数，可以通过解构提前显式地引用这些属性
var getCarProductModel = ({brand,make,model} = {})=>({
    sku: brand + ':' + make + ':' + model,
    brand,
    make,
    model
})

var car = {
    brand: 'volvo',
    make: 2019,
    // model: '201',
    price: 280000,
    color: 'red'
}
console.log(getCarProductModel(car));
console.log(getCarProductModel({}));
console.log(getCarProductModel());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//剩余参数
//在函数的最后一个参数前添加...可以将该参数转变为一个特殊的剩余参数。
//当剩余参数是函数中的唯一参数时，它会获取所有传入函数的参数
// function join(...list) {
//     return list.join(',')
// }
// console.log(join('first', 'second', 'third'));

// var join = (...list) => list.join(',')
// console.log(join('first', 'second', 'third'));

//剩余参数前面的参数不会包含在 list 参数中
function join(separator,...list) {
    return list.join(separator)
}

console.log(join(';', 'first', 'second', 'third'));