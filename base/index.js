//задача 1
// let arr = [1, 4, 3, 12, 10, 6, 8, 100, 45, 42]
// let maxNum = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//         maxNum = arr[i]
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] / maxNum)
// }
//задача 2
// let arr = [1, 4, 5, 6, 7, 8, 9, 10];
// let i = arr.indexOf(11)
//     if (i > -1) {
//         console.log(11)
//   } else {
//       console.log('false')
//   }

//задача 3 Вывести элементы числового массива, которые больше, чем элементы, стоящие перед ними.

// let arr = [30, 69, 45, 22, 59, 89, 71, 84, 22, 19]

// function compareArray(inArray) {

//     for (let i = 0; i < inArray.length - 1; i++) {

//         console.log(i, inArray[i], inArray[i+1])

//         if (inArray[i + 1] > inArray[i]) {
//             console.log(inArray[i + 1])
//         }
//     }
// }

// let arr = [10, 15, -5, 10, -3, -1, -7]
// let count = 0
// for (i = 0; i < arr.length; i++) {
//     if (arr[i + 1] > arr[i])
//     count++
//     console.log(arr, count++)

// }


// let name = "Джон"
// let admin = name
// console.log(name)

// let name = "mary";

// console.log( `hello, ${name}!` )

// console.log( `result: ${1 + 2}` )

// let ageFieldChecked = true
// let nameFieldChecked = false
// let isGreater = 5 > 1

// console.log(isGreater)

// let age
// console.log(age)

// let symbol = Symbol.for('mySymbol')
// // let symbol2 = Symbol.for('mySymbol')
// let symbolName = Symbol.keyFor(symbol)
// console.log(symbolName)


// let value = true
// console.log(typeof value)

// value = String(value)
// console.log(typeof value)

// let str = '124'
// console.log(typeof str)
// let num = Number(str)
// console.log(typeof num)

// console.log( 5 ** 3)

// let y = -2
// console.log( + y )
// let counter = 1
// let a = counter++




// 5 > 4 true
// "ананас" > "яблоко" false
// "2" > "12" true
// undefined == null true
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n" false




// let age = 17
// if (age >=18) {
//     console.log("you are an adult!")
// }else {
//     console.log("you are a kid")
// }

// console.log((age >= 18) ? "you are an adult!" : "you are a kid!")


// console.log( true || true );   // true
// console.log( false || true );  // true
// console.log( true || false );  // true
// console.log( false || false ); // false

// let age = 13
// if (age < 14 || age > 90)(
//     console.log(age)
// )

// const d = undefined ?? 'error'
// console.log(d)



// let sum = 0;

// while (true) {

//   let value = +("введіть число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// console.log( 'сума: ' + sum );



// let i = 0;
// while (i++ < 5)
// console.log(i)



// for (i = 0; i<10; i++)

// if(i===7){
//   break
// }
// console.log(i++, 'i have broken out of the loop')




// function greet(name) {
//  console.log('hello ' + name)
// }
// greet('mary');

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// console.log( sum(1, 2) );


// const plus = (x, y) => x + y;
// const plusRes = plus(1, 2);
// console.log(plusRes)

// function someCalculation(arr, num) {
//   if (arr[num] != undefined) {
//     return arr[num]
//   } else {
//     return -1
//   }
// }
// let someNumbers = [1, 4, 5, 10, 0]
// console.log(someCalculation(someNumbers, 4))

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }


// let clock = new Clock({template: 'h:m:s'});
// clock.start();


// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(Animal)
//         this.name = name;
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("Білий кролик");
// console.log(rabbit.name);
// function A() {}
// function B() {}

// A.prototype = B.prototype = {};

// let a = new A();

// console.log( a instanceof B );

