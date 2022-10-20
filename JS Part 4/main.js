// 1 	Viết function có đầu vào là 1 array
// a, Function trả ra tổng các phần tử trong array
// b, Function trả ra tích các phần tử trong array

// function fc (array){
//     let sum =0;
//     for(var i=0; i<array.length; i++){
//         sum += array[i];
//     }
//     return(sum);
// }

// function fs(array){
//     let hieu = 0;
//     for(var i=0; i<array.length; i++){
//         hieu -= array[i];
//     }
//     return(hieu);
// }

// var array = [3,5,7,8,1];
// console.log(fc(array), fs(array));

// =============================================================================================

// 2	viết function có đầu vào là 1 array chứa các số
// 	a, Function trả ra số lớn nhất trong array 
// 	b, Function trả ra số bé nhất trong array 
// function maxFs (array){
//     let max = array[0];

//     for(let i = 0; i< array.length; i++){
//         if( max < array[i]){
//             max = array[i];
//         }
//     }
//     return max;
// }
// let num = maxFs([4,6,8,2,8,9]);
// console.log(num)

// function maxFs (array){
//     let min = array.length-1;

//     for(let i = 0; i< array.length; i++){
//         if( min > array[i]){
//             min = array[i];
//         }
//     }
//     return min;
// }
// let num = maxFs([4,6,8,2,8,9]);
// console.log(num)

// ========================================================================================

// 3	viết function có đầu vào là 1 array
// 	Function trả ra array mới với thứ tự ngược lại với array ban đầu

// function returnX (array){
//         for (var i = 0, j = array.length - 1; i < j; i++, j--){
//             var temp = array[i];
//             array[i]  = array[j];
//             array[j] = temp 
//         }
//         return(array);
//     }

// var point = returnX([3,5,6,7,8,2,5]);
// console.log(point);


var orderData = [   { id: 1, listProduct: [ {idSP: 1, buy: 2}, {idSP: 2, buy: 1}]}, 
                    { id: 2, listProduct: [ {idSP: 1, buy: 1}, {idSP: 2, buy: 1}]},
                ]

var sumary = {};

for (var i = 0; i < orderData.length; i++){

var listProduct = orderData[i].listProduct;

for(var j =0; j<listProduct.length;j++ ){
    var key = listProduct[j].idSP
    if(!sumary[key]){
        sumary[key] = listProduct[j].buy;
    }
    else{
        sumary[key] += listProduct[j].buy;
    }
}

var productData = [
    {idSP: 1, price: 500000, store: 100}, 
    {idSP: 2, price: 300000, store: 200},
    {idSP: 3, price: 200000, store: 300},
]

for(var i = 0; i< productData.length; i++){
    var id = productData[i].idSP;

    productData[i].store -= sumary[id];
}
console.log(productData);

}