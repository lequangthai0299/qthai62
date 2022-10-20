//reduce

// Array.prototype.reduce2 = function (callback, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// let num = [1, 2, 4, 6, 7, 8];
// let result = num.reduce2((total, num) => {
//   return total + num;
// }, 10);
// console.log(result);

// ===========================================================================
// every

// Array.prototype.every2 = function (callback) {
//   let output = true;
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       var result = callback(this[index], index);
//       if (!result) {
//         output = false;
//         break;
//       }
//     }
//   }
//   return output;
// };

// let obj = [
//   {
//     name: "Thai",
//     coin: 500,
//   },
//   {
//     name: "Quang",
//     coin: 300,
//   },
//   {
//     name: "Quan",
//     coin: 100,
//   },
// ];
// let result = obj.every2((obj) => {
//   return obj.coin >= 50;
// });
// console.log(result);

//Promise
//async
async function demo() {
  return 9;
}

var result = demo();
// console.log(result);        //Promise fullfill

//async await
async function demo() {
  var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 3000);
  });
  await p1;

  //   console.log("continue");
}

var result = demo();
// console.log(result);

function API1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
}

function API2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 3000);
  });
}

//TH1: cộng tổng trong thời gian ngắn nhất

(async function () {
  var ketqua = await API1();
  var ketqua1 = await API2();
  console.log(ketqua + ketqua1);
});
