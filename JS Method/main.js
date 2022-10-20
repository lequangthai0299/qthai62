// var array = [
//     {user: 'tien', age: 20},
//     {user: 'linh', age: 10},
//     {user: 'minh', age: 30},
//     {user: 'trung', age: 25},
//     {user: 'tung', age: 18},
// ];

// var newArr = array.filter(function(filterAge){
//     return filterAge.age >=20;
// })
// console.log(newArr);


// =========================================================================

// 1 	+Viết function có đầu vào là 1 array
// a, Function trả ra tổng các phần tử trong array
// b, Function trả ra tích các phần tử trong array

// var arr = [3,4,5,7,8,2,6,9];
// let sum = 0;
// let tich = 1;
// let newArr = arr.filter(function(element){
//     sum+= element;
// })
// console.log(sum);

// let newArr = arr.filter(function(element){
//     tich*= element;
// })
// console.log(tich);

// ===========================================================================================

// 2	viết function có đầu vào là 1 array chứa các số
// 	a, Function trả ra số lớn nhất trong array 
// var arr = [3,5,7,8,2,5,7];
// var newArr = arr.filter(function(sln){
    
// })


// 3	viết function có đầu vào là 1 array
// Function trả ra array mới với thứ tự ngược lại với array ban đầu

// var arr = [3,5,7,8,2,5,7];
// var newArr = arr.reverse();
// console.log(newArr);

// ==================================================================

// 4 	viết function có đầu vào là 1 number và 1 array chứa số
// 	Function trả ra số lần number lặp lại trong array


// function countElement (arr, number){
//     var count = 0;
//     for (var i = 0; i< arr.length; i++){
//         if (number === arr[i]){
//             count ++;
//         }
//     }
//     console.log(count);
// }
// var arr = [3,2,6,7,8,5,6,9];
// countElement(arr, 6)

// ========================================================================

// 5 	viết function có đầu vào là 1 string
// 	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới

// var test = {
//     ten: 'Le Quang Thai',
//     tuoi: 30,
//     diaChi: 'An Khanh Hoai Duc'
// }
// var point = test.ten.replace(/ /g, '-');
// var point1 = test.diaChi.replace(/ /g, '-');
// console.log(point, point1);

// =====================================================================

// 6: 	Viết 1 function kiểm tra số nhập vào có phải là số nguyên tố hay không?

// Bài 1:  var data2 = [1,1,3,4,4,5,6,7,9]
// a ) Thêm số 8 vào cuối array data2 . 
// b ) Thêm số 10 vào cuối array data2
// c ) Thêm số 5 vào đầu  array data2 .
// d ) Đổi phần tử có vị trí là 5 thành số  11 .
// e ) Xóa phần tử vị trí  thứ 4 và thêm 2 số 5 và 7 vào data2 .  

// var data2 = [1,1,3,4,4,5,6,7,9];
// data2.push(8);
// data2.push(10);
// data2.unshift(5);
// data2.splice(5, 1, 11);
// data2.splice(4, 1, 5,7);
// console.log(data2);

// =========================================================================

// Bài 2 : var  data03 = [“Cam”,”Xoài”,”Mít”,”Bưởi ”,”Quýt,”Dưa gang”]
// a ) Copy array data03. Bằng  … 
// b )  Sửa phần tử “Dưa gang” thành “Dưa hấu” 
// c ) Thêm “mận” vào giữa data03 . 
// d ) Thêm “Dứa” vào đầu của data03 và “Chanh”  vào cuối data03 .

// var  data03 = ['Cam','Xoài','Mít','Bưởi','Quýt','Dưa gang'];
// var newData = [...data03];
// data03.pop();
// data03.push('Dưa hấu')
// data03.splice(4,0,'Mận')
// data03.unshift('Dứa');
// data03.push('Chanh')
// console.log(data03);

// Bài 3 :
// const persons = [
//   {firstname : "Đào", lastname: "Văn Anh"},
//   {firstname : "Trần", lastname: "Huy"},
//   {firstname : "Lê", lastname: "Hoàng"}
// ];
// a ) Tạo ra một array persons mới . (newPersons)
// a ) Thêm {firstname : "Điền họ của bạn…", lastname: "Điền họ của ban …."} vào cuối Array newPersons. 
// // c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array newPersons . 

// const persons = [
//     {firstname : "Đào", lastname: "Văn Anh"},
//     {firstname : "Trần", lastname: "Huy"},
//     {firstname : "Lê", lastname: "Hoàng"}
//   ];
// var newPersons = [...persons];
// // newPersons.push = {firstname: 'Thai', lastname: 'Quang'}
// newPersons.splice(2, newPersons.lastname, "Nguyễn")
// console.log(newPersons);

//map
// var arr = [3,2,1,6,8,10];
// var newArr = arr.map(function (value, index){
//     if(value%2===0){
//         return value * 10
//     }
//     else{
//         return value *5
//     }
    
// })
// console.log(newArr);

//find

// var array = [
//     {user: 'tien', pass: '123'},
//     {user: 'linh', pass: '123'},
//     {user: 'tien', pass: '123'},
//     {user: 'minh', pass: '123'},
//     {user: 'trung',passe:'123'},
//     {user: 'tung', pass: '123'},
// ];

// var userName = 'thai';
// var pass = '';
// var check =  array.find( function (value){
//     if (value.user === userName){
//         return true
//     }
//     else{
//         return false
//     }
//  })
// console.log(check);

// if(check){
//     console.log('user đã tồn tại');
// }
// else{
//     array.push({user: userName, pass})
// }
// console.log(array);


// var array = [
//     {user: 'tien', pass: '123'},
//     {user: 'linh', pass: '123'},
//     {user: 'tien', pass: '123'},
//     {user: 'minh', pass: '123'},
//     {user: 'trung',passe:'123'},
//     {user: 'tung', pass: '123'},
// ];

// var check =  array.findIndex( function (value){
//     return value.user === 'minh'
// })
// console.log(check);

//reduce

// var array = [
//     {name: 'quan', quantity: 100, price: 100000},
//     {name: 'ao', quantity: 10, price: 300000},
//     {name: 'giay', quantity: 50, price: 200000},
// ];



// var data = array.reduce(function(total, value, index){
//     return total + value.quantity * value.price
//             // total += 
    
// },0)
// console.log(data);


// sort
// var array = [
//     {name: 'quan', quantity: 100, price: 100000},
//     {name: 'ao', quantity: 10, price: 300000},
//     {name: 'giay', quantity: 50, price: 400000},
//     {name: 'tất', quantity: 80, price: 200000}
// ];

// array.sort(function(a,b){
//     if (a.price < b.price){
//         return -32231
//     }
// })
// console.log(array);


