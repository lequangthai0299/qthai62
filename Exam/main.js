// 1	-	Cho 2 array
// 			array1 = [3, 2, 1, 6, 'a']
// 			array2 = [9, 5, 0, 'h', 3, 5, 4, 'c']

// 	a, hãy tạo ra array3 mới chứa gồm 2 phần tử đầu của array1 và 3 phần tử cuối của array2
// 	b, hãy tạo ra array4 chứa các số chẵn của array1 và array2
// 	c, số lớn nhất có thể tạo ra từ các chữ số trong array4 là bao nhiêu? Mỗi phần chỉ xuất hiện 1 lần

// 	2	- 	cho array ['nguyen thanh tung', 'nguyen van nam', 'vu thanh trung', 'hoang tu linh']
// 	a, sắp xếp array tăng dần
// 	b, hãy tạo array mới chỉ chứa những người họ 'nguyen'

// 	3	-	cho array [1,3,5,1,2,5,1,5,1,6,2,9, 1]
// 	a, tính tổng các phần tử trong array
// 	b, tính tích các phần tử trong array
// 	c, số 5 nằm ở những vị trí nào trong array
// 	d, phần tử nào trong array lặp lại nhiều nhất
// 	e, hãy tạo ra array mới chứa các phần tử không trùng nhau

// 1	-	Cho 2 array
// 			array1 = [3, 2, 1, 6, 'a']
// 			array2 = [9, 5, 0, 'h', 3, 5, 4, 'c']

// 	a, hãy tạo ra array3 mới chứa gồm 2 phần tử đầu của array1 và 3 phần tử cuối của array2
// 	b, hãy tạo ra array4 chứa các số chẵn của array1 và array2
// 	c, số lớn nhất có thể tạo ra từ các chữ số trong array4 là bao nhiêu? Mỗi phần chỉ xuất hiện 1 lần

// var array1 = [3, 2, 1, 6, 'a'];
// var array2 = [9, 5, 0, 'h', 3, 5, 4 , 'c'];

//a
// var arraya = array1.splice(0, 2);
// var arrayb = array2.splice(5,8);
// var array3 = [...arraya,...arrayb];
// console.log(array3);

//b
// function locChan(value, index){
//     return value % 2 ==0;
// }
// var newArr = array1.filter(locChan);
// var newArr2 = array2.filter(locChan);
// var array4 = [...newArr,...newArr2];
// console.log(array4);

//c
// function max (total, array4){
//     return total + array4
// }
// var sum = array4.reduce(max)
// console.log(sum);

// 	2	- 	cho array ['nguyen thanh tung', 'nguyen van nam', 'vu thanh trung', 'hoang tu linh']
// 	a, sắp xếp array tăng dần
// 	b, hãy tạo array mới chỉ chứa những người họ 'nguyen'\
//a

// var array = ['nguyen thanh tung', 'nguyen van nam', 'vu thanh trung', 'hoang tu linh'];
// array.sort();
// console.log(array);

//b

// var newArr = array[0].includes('nguyen');
// var newArr;
// for(i=0;i<array.length;i++){
//     if(array[i].includes('nguyen') === true){
//         return newArr = array.push('nguyen')
//     }
// }
// console.log(newArr);

// 	3	-	cho array [1,3,5,1,2,5,1,5,1,6,2,9,1]
// 	a, tính tổng các phần tử trong array
// 	b, tính tích các phần tử trong array
// 	c, số 5 nằm ở những vị trí nào trong array
// 	d, phần tử nào trong array lặp lại nhiều nhất
// 	e, hãy tạo ra array mới chứa các phần tử không trùng nhau

//a
var array = [1, 3, 5, 1, 2, 5, 1, 5, 1, 6, 2, 9, 1];
// function max (total, array){
//     return total + array
// }
//     var sum = array.reduce(max)
//     console.log(sum);

//b
// var tich =1;
// for(var i=0; i<array.length; i++){
//     tich *= array[i];
// }
//     console.log(tich);

//c
// var index = 0;
// for(var i =0; i<array.length;i++){
//     if(array[i]===5){
//     index = i
//     console.log(index);
// }
// }

//d

// function phanTuXuatHienNhieuNhat(array){
//     array.sort();

//     let max =[0,0];
//     let count =1;
//     for (var i = array.length-1; i > 0; --i) {
//         if (array[i] == array[i-1]) ++count;
//         else{
//             if (max[1] < count){
//                 max[0] = array[i];
//                 max[1] = count;
//              }
//              count = 1;
//         }
//     }
//     console.log(max[0], max[1]);
// }
// phanTuXuatHienNhieuNhat(array);

e;
function unique(array) {
  var newArr = [];
  newArr = array.filter(function (item) {
    return newArr.includes(item) ? "" : newArr.push(item);
  });
  return newArr;
}
console.log(unique(array));
