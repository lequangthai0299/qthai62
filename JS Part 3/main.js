// var list = [ 1,3,5,7,9]
// var index = 0;
// for(i = list.length-1 ; i>=0 ; i--){
//     console.log(4, i, list[i])
// }


// từ đầu đến cuối đến số 5 đầu tiên
// for(var i = list.length-1; i >=0; i--){
//     if( list[i] === 5){
//         break;
//     }
// }

// var stop = i;
// for(i=0; i<stop; i++){
//     console.log(list[i])
// }


// từ cuối đến đầu đến số 7 cuối cùng
// for(var i = 0; i< list.length; i++){
//     if(list[i]===3){
//         break;
//     }
// }

// var start = i;

// for(var j = list.length-1; j>=0; j--){
//     if(list[j]===7){
//         break;
//     }
// }

// var stop = j;

// for (var a = start; a<=stop; a++ ){
//     console.log(list[a])
// }

// Bài 1: cho array = [1,5,7,8,9,15,8]

// 1.1 in ra các số chẵn của mảng
// 1.2 in ra các số lẻ của mảng
// 1.3 in ra các số lớn hơn hoặc bằng 5 của mảng
// 1.4 Cộng tổng các số chia hết cho 5 của mảng
// 1.5 Tìm ra tích 3 số đầu của mảng array
// 1.6 Tính tổng 3 phần tử cuối của mảng
// 1.7 Tìm xem trong array có phần tử nào là số 5 không?
// 1.8 Đếm số phần tử = 8 trong mảng

// var array = [1,5,7,8,9,15,8];
// var index = 0;
// for (var i = 0; i<array.length; i++){
//     if (array[i] % 2 === 0){
//         console.log(array[i])
//     }
// }

// for (var i = 0; i<array.length; i++){
//     if (array[i] % 2 === 1){
//         console.log(array[i])
//     }
// }

// for (var i = 0; i<array.length; i++){
//     if (array[i] >=5){
//         console.log(array[i])
//     }
// }

// var sum = 0;
// for (var i = 0; i<array.length; i++){
//     if (array[i] % 5 === 0 ){
//         console.log(array[i])
//         sum += array[i];
//         console.log(array[i])
//     }  
        
// }

// var tich = 0;
// // for (var i = 0; i < array[2]; i++){
// //     console.log(array[i])
// // }
// if(array[index] === 3 ){
//     console.log(array)
// }

// ===========================================================================================

// Bài 2: cho var data = [3,2,4,1,8,7,1,10,1,2]

// a, tính tổng các phần tử trong array
// b, tính tích các phần từ trong array
// c, tính tổng các số lẻ trong array
// d, tính tích các số chẵn trong array
// e, có mấy số 1 trong array, ở những vị trí nào
// f, số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array

// var data = [3,2,4,1,8,7,1,10,1,2];
// var sum = 0;
// for(var i = 0; i<data.length; i++){
//     sum += data[i];
// }
//     console.log(sum);

// var mul = 1;
// for(var i = 0; i < data.length; i++){
//     mul *= data[i];
// }
//     console.log(mul);

// var sum = 0;
// for (var i = 0; i<data.length; i++){
//     if (data[i]%2 === 1);
//     sum += data[i]
// }
// console.log(sum)

// var array = [22222, 1, 3, 25 ,41 ,3 ,2 ,2 ,66 ,22 ,5 ,1 ,1 ,2 ,651 ,51 ,5 ,2];

// var count = 0;

// for(var i=0; i<array.length; i++){
//     var string = array[i] + '';
//     for(var j =0; j<string.length; j++){
//         if(string[j]==='2'){
//             count++;
//         }
//     }
    // if(count>=4){
    //     break;
    // }
// }

// console.log(count);

// var array = [22222, 1, 3, 25 ,41 ,3 ,2 ,2 ,66 ,22 ,5 ,1 ,1 ,2 ,651 ,51 ,5 ,2];
// var count = 0;

// for ( var i = 0; i < array.length; i++){
    
//     var string = array[i] + '';

//     for (var j = 0; j < string.length; j++){
//         if(string[j] === '2'){
//             count ++;
//         }
//     }
// }
// console.log(count)

// var array = [ 1, 3, 25 ,41 ,3 ,2 ,2 ,66 ,22 ,5 ,1 ,1 ,2 ,651 ,51 ,5 ,2];
// var index;
// for(var i = 0; i<array.length; i++){
//     var isContinue = false;
//     for(check = 0; check < i; i++){
//         if(array[check]===array[i]){
//         isContinue = true;
//         break;
//     }
//     }
//     var count = 0;
    
//     for(var j = i; j<array.length; j++){

//     }



// }



// Bài 6: cho data = [3,2,4,1,8,7]
// a, hãy dùng while để sắp xếp array theo chiều tăng dần
// b, hãy dùng while để sắp xếp array theo chiều giảm dần

// var data = [3,2,4,1,8,7];
// for(var i = 0; i<data.length; i++){
//     for(var j = i+1; j<data.length; j++){
//         if(data[i] < data[j]){
//             var current = data[i];
//             data[i] = data[j];
//             data[j] = current;
//         }
//     }
// }
// console.log(data)


// var obj = {
//     ten: 'huy',
//     tuoi: 10,
//     status: 'single',
//     test: undefined
// }


// for(var key of array){
//     console.log(key);
// }

// function cong (num1,num2,num3,num4,num5){
//     console.log(num1+num2+num3+num4+num5);
// }
// cong(10,20,40,0,39)


// function cong (num1,num2){
//     console.log(num1+num2);
// }
// cong(10,20)

// function cong (){
//     var sum = 0;
//     for(i=0; i<arguments.length;i++){
//         sum+= arguments[i];
        
//     }
//     return sum;
// }
// var ketQua = cong(10,20,40,0,39);
// var kq1 = cong(40,20,24,59);
// var kq2 = cong(49,123,5,6,7,41);
// // console.log(ketQua + kq1 + kq2);

// var total = ketQua+kq1-kq2;
// console.log(total);
function up (array){
    for (var i = 0; i<array.length; i++){
        for(var j = i+1; j<array.length; j++){
            if(array[i] < array[j]){
                var current = array[i];
                array[i] = array[j]
                array[j] = current
            }
        }

    }
   return (array) 

}
var point = up([3,4,1,6,7,9,5])
console.log(point);
