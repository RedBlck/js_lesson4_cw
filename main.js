// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber(a, b, c) {
//     if (a < b && a < c) {
//         document.write(a);
//     } else if (b < a && b < c) {
//         document.write(b);
//     } else if (c < a && c < b) {
//         document.write(c);
//     }
// }
//
// minNumber(5, 1, 20);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber(a, b, c) {
//     if (a > b && a > c) {
//         document.write(a);
//     } else if (b > a && b > c) {
//         document.write(b);
//     } else if (c > a && c > b) {
//         document.write(c);
//     }
// }
//
// maxNumber(2, 7, 15);


// - створити функцію яка повертає найбільше число з масиву
// function maxNumberArr(arr) {
//     let max = arr[0]
//     for (const arrElement of arr) {
//         if (arrElement > max) {
//             max = arrElement;
//         }
//     }
//     return max;
// }
//
// document.write(maxNumberArr([2, 8, 71, 6, 10, 33]));


// - створити функцію яка повертає найменьше число з масиву
// function minNumberArr(arr) {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
//
// document.write(minNumberArr([-8, 8, 71, 6, -20, 33]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function arrPlus(arr) {
//     let result = 0;
//     for (const arrElement of arr) {
//         result = result + arrElement;
//     }
//     return result;
// }
//
// document.write(arrPlus([1, 2, 10]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arrayArif(arr) {
//     let result = 0;
//     for (const arrElement of arr) {
//         result = result + arrElement;
//     }
//     let arifm = result / arr.length;
//     return arifm;
// }
//
// document.write(arrayArif([1, 2, 10]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function numMax(numbers) {
//     let min = numbers[0];
//     let max = numbers[0];
//     for (const num of numbers) {
//         if (num < min) {
//             min = num;
//         }
//         if (num > max) {
//             max = num;
//         }
//     }
//     document.write(max);
//     return min;
// }
//
// numMax([2, 8, 6, 4, 10]);


// - створити функцію яка заповнює масив рандомними числами
// function arrRandom() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
//
// document.write(arrRandom());


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function arrRandomLimit(arr, limit) {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr
// }
//
// document.write(arrRandomLimit([], 5));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function array(arr) {
//     let arrRevers = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
//         arrRevers.push(arrElement);
//     }
//     document.write(arrRevers);
//  }
//
//
// array([1, 2, 3]);