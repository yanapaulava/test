// var str = "Warm ap",
//     number = 1,
//     numberSecond = 2.4,
//     bool = true,
//     under,
//     nuull = null;
//
// var obj = {
//         prop: "yo",
//         fu: function () {
//         }
//     },
//     regexp = /baba/g,
//     func = function (number) {
//     return number * 50;
//     },
//     arr = [1, 2, 3];
//
// obj.prop = 'loftblog';
// arr[2] = 24;
// console.log(arr)

// console.log(obj);
// console.log( typeof obj );
// console.log( typeof func );
// console.log( typeof arr );

const COEFFICIENT_FOR_FAHRENHEIT = 23;

var celsius = 20;

fahrenheit = function (temperature) {
    return temperature + COEFFICIENT_FOR_FAHRENHEIT;
};


document.write(fahrenheit(celsius));