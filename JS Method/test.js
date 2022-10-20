// Bài 1 :   
// var array = [1 ,3,7,8,9,0,10,3,2].; 
//  a ) áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  . 
//  b )  áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 
// c  ) cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả . 
// d ) cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )

// var array = [1,3,7,8,9,0,10,3,2];

//a

// var newArr = array.sort(function(a,b){
//     if(a<b)
//     return -312;
// });
// console.log(newArr);

//b

// var newData = array.map(function(a,b){
//     return a*2;
// })
// console.log(newData);

//c

// var array3= [1,2,3,5,1];
// var newArr2 = [...array3,...array]
// console.log(newArr2);

//d

// var newData2 = array.splice(5,4,1,2,3,5,1);
// console.log(array);

//e áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn 

// var locChan = array.filter(function(a,b){
//     if(a%2 == 0){
//         return a
//     }
// })
// console.log(locChan);

// var locLe = array.filter(function(a,b){
//     if( a%2 == 1){
//         return a
//     }
// })
// console.log(locLe);

// // Bài 2:
// // Cho array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
// -) Xóa phần tử cuối cùng và in lại array
// -)Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm 
// - Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
// - Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array

// (ÁP dụng array.splice )

// var array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
// array2.pop()
// console.log(array2);

// array2.unshift(12);
// console.log(array2);

// array2.splice(2, 3)
// console.log(array2);


// Bài 3 
// // Cho array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
// a )  Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
// b) Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.



// var array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
// var locChan = array3.filter(function(value,index){
//     if(value %2 ===0){
//         return value
//     }
// })
// console.log(locChan);

// var locLe = array3.filter(function(value,index){
//     if(value %2 ===1 && value >3){
//         return value
//     }
// })
// console.log(locLe);



// Bài 1: var bienLai = [
//     { ten: "an", giaTri: 300 },
//     { ten: "binh", giaTri: 180 },
//     { ten: "hoang", giaTri: 170 },
//     { ten: "van", giaTri: 100 },
//     { ten: "lam", giaTri: 200 },
//     { ten: "thinh", giaTri: 210 },
//     { ten: "diep", giaTri: 100 },
//     { ten: "huong", giaTri: 100 },
//   ];
//   a. Tìm những người có giá trị biên lai hớn hơn 200.
//   b. Tìm thứ tự mua hàng của người tên "lam". 
//   c. Xuất ra những người có biên lai bằng nhau
//   d. Những người có biên lai hơn 200 thì thêm {rank:"Vip"}, còn lại thì thêm {rank:"normal"}
//   e. Sắp xếp danh sách giảm dần theo giá trị biên lai.
  
var bienLai = [
        { ten: "an", giaTri: 300 },
        { ten: "binh", giaTri: 180 },
        { ten: "hoang", giaTri: 170 },
        { ten: "van", giaTri: 100 },
        { ten: "lam", giaTri: 200 },
        { ten: "thinh", giaTri: 210 },
        { ten: "diep", giaTri: 100 },
        { ten: "huong", giaTri: 100 },
      ];

var findBienLai = bienLai.filter(function(value,index){
    if(value.giaTri > 200){
        return value.ten
    }
})
// console.log(findBienLai);

var findThuTu = bienLai.findIndex(function(value){
    if (value.ten === 'lam'){
        return value.ten
    }
})
// console.log(findThuTu);

//   d. Những người có biên lai hơn 200 thì thêm {rank:"Vip"}, còn lại thì thêm {rank:"normal"}
var findBienLai = bienLai.filter(function(value,index){
    if(value.giaTri > 200){
        return value.ten
    }
})
var rank = 'Vip';
var rank2 = 'Normal';
if(findBienLai){
    bienLai.push({rank: rank})
}else{
    bienLai.push({rank: rank2})
}
console.log(findBienLai);