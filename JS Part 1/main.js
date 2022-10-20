// // // // Bài 1.
// // // // Cho array = [1,6,8,7,6,9]
// // // // a, array trên có bao nhiêu phần tử
// // // // b, hãy in ra phần tử đầu tiên và phần tử cuối cùng trong array
// // // // c, hãy thêm số 5 vào cuối array
// // // // d, hãy thay đổi giá trị của phần tử đầu tiên và cuối cùng trong array thành số 10

// // // var arr = [1,6,8,7,6,9];
// // // console.log(arr.length);
// // // console.log(arr[0], arr[arr.length-1])
// // // arr[arr.length-1] = 5;
// // // console.log(arr);
// // // arr[0]=10;
// // // arr[arr.length-1] = 10;
// // // console.log(arr);

// // // //=========================================================================================


// // // Bài 2, 
// // // cho object user = {
// // // 	ten: ‘tung’,
// // // 	tuoi: 20
// // // }

// // // a, hãy in ra tên và tuổi của user
// // // b, hãy thêm cho user họ là ‘nguyễn’
// // // c, hãy thay đổi tuổi thành 30

// // var user = {
// //     ten: 'tung',
// //     tuoi: 20
// // }

// // console.log(user.ten, user.tuoi);
// // user.ho = 'nguyen';
// // console.log(user);
// // user.tuoi = 30;
// // console.log(user);
// ==============================================================================================




// // Bài 3,
// // cho object user = {
// // 	ten: ‘tung’,
// // 	tuoi: 20
// // 	banBe:[‘vy’,’tung’,’tuan’]
// // 	diaChi:{
// // tinh: ‘HCM’,
// // quan:’Q1’
// // }
// // }
// // a, in ra array bạn bè
// // b, người bạn cuối cùng tên là gì
// // c, in ra object dia chi của user
// // d, hãy tạo string giới thiệu bản thân cho object user trên theo mẫu sau
// // ‘tên tôi là …, tôi .. tuổi, tôi ở … tỉnh …’
// // e, hãy thêm đường = ‘nguyễn tuân’ vào địa chỉ của user
// // f, hãy thêm ‘thai’ vào danh sách bạn của user

// var user = {
//     ten: 'tung',
//     tuoi: 20,
//     banBe:['vy','tung','tuan'],
//     diaChi:{
//     tinh: 'HCM',
//     quan:'Q1'}
// }
// console.log(user.banBe);
// console.log(user.banBe[2]);
// console.log(user.diaChi)

// user.gt = `ten toi la: Le Quang Thai,toi 25 tuoi, toi o HN `;
// console.log(user);
// user.duong = 'nguyen tuan';
// console.log(user)
// user.banBe[3] = 'thai';
// console.log(user)
// ==========================================================================================
// Bài 4,
// var age = 20,
// var name = ‘tung’
// hãy tạo ra string greet theo mẫu 

// `
// xin chao, tôi là … , tôi …. tuổi.
// tên bạn là gì?

//  var age = 20;
//  var name = 'tung'
//  console.log(`xin chao,
//   toi la ${name} , toi ${age} tuoi, ten bạn là gì`)
// ========================================================================================
// Bài 5

// Cho Array = [10,20,50,99,58,70,60]
// hãy đảo chỗ của phần tử đầu và phần tử cuối trong array 
// // ketqua [60,20,50,99,58,70,10]

// var arr = [10,20,50,99,58,70,60];
// arr[0] = 60;
// arr[arr.length-1] = 10;
// console.log(arr)

// ===================================================================================


// Bài 6, 
// cho array = [3,5,4,9,8,1,10]
// a, hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
// b, hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối 
// // 3 + 20


// var arr = [3,5,4,9,8,1,10]
// var sum = arr[0] + arr[arr.length-1];
// console.log(sum);
// arr[arr.length-1] = 20;
// var sum2 = arr[0] + arr[arr.length-1];
// console.log(sum2)

// ======================================================================================
// Bài 7, cho array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// a, tính tổng của phần tử đầu và phần tử cuối trong array2 và array con 
// // 1 + 3 + 6 +5
// b, hãy thêm số 10 vào cuối array con và tính lại tổng trên

// var arr = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// var sum = arr[0] + arr[arr.length-1];
// var sum2 = arr[5][0] + arr[5][arr[5].length-1];
// var total = sum + sum2;
// console.log(total);
// arr[5][arr[5].length-0] = 10;
// var sum = arr[0] + arr[arr.length-1];
// var sum2 = arr[5][0] + arr[5][arr[5].length-1];
// var total = sum + sum2;
// console.log(total);

// Bài 1: Sử dụng console.log() in ra các kết quả sau:
// “BootCamp4 thực hành buổi 14”
// 12346
// Khai báo các biến sau: Tên của bạn, tuổi của bạn, nơi ở hiện tại.
// In ra một chuỗi chứa đầy đủ thông tin trên sử dụng template String.
// Thay đổi dữ liệu của mỗi biến để thấy kết quả khác nhau.

// console.log('BootCamp4 thực hành buổi 14');
// console.log(12346);
// var name = 'Thái';
// var age = 25;
// var add = 'Hoài Đức';
// console.log(`Toi tên là: ${name}, tôi ${age} tuổi, tôi sống tại ${add}`);
// age = 26;
// console.log(age);
// console.log(`Toi tên là: ${name}, tôi ${age} tuổi, tôi sống tại ${add}`);

// ============================================================================================

// Bài 2: Tạo một object chứa thông tin của bản thân:
// 	ví dụ: var human = {
//     			name: "",
//     			gender: "Male",
//     			// ....
// }
// Thêm từ 1 - 5 thuộc tính về bản thân.
// Sử dụng console.log() để xem kết quả.
// Truy vấn từng giá trị của đối tượng đã tạo.
// Đổi các value thành thông tin của người bên cạnh.
// Thêm key “ethnic”(dân tộc) vào đối tượng và gán cho giá trị cụ thể.
// Console.log() chuỗi bất kỳ chứa tất cả thông tin đã tạo trước đó.
// var human = {
//     name: 'Thái',
//     gender: 'Male',
//     age: 25,
//     add: 'Hoài Đức',
//     gpa: 2.5
// }
// console.log(human);
// console.log(human.name,human.gender,human.age,human.add,human.gpa);
// human.name = 'Bien';
// human.ethnic = 'Kinh';
// console.log(human);


// ============================================================================================
// Bài 3: Cho trước một object sau:
// ví dụ: var monthSalary = {
//     January:    1000,
//     February:    4000,
//     March:      5400,
//     April:      6040,
//     May:        1700,
//     June:       1000,
//     July:       8000,
//     August:     1600,
//     September:  1000,
//     October:    1700,
//     November:   1903,
//     December:   9050
// }
// console.log() ra tổng lương 3 tháng đầu năm.console.log() ra lương tháng trung bình cả năm.
// Thêm key lương tháng 13 và tính lại trung bình thu thập cả năm.

// var monthSalary = {
//         January:    1000,
//         February:   4000,
//         March:      5400,
//         April:      6040,
//         May:        1700,
//         June:       1000,
//         July:       8000,
//         August:     1600,
//         September:  1000,
//         October:    1700,
//         November:   1903,
//         December:   9050
//     }

// var sum3 = monthSalary.January + monthSalary.February + monthSalary.March;
// console.log(sum3);
// var luongTrungBinhNam = (monthSalary.January + monthSalary.February + monthSalary.March + monthSalary.April + monthSalary.May +monthSalary.June + monthSalary.July + monthSalary.August + monthSalary.September + monthSalary.October + monthSalary.November + monthSalary.December)/12;
// console.log(luongTrungBinhNam);
// monthSalary.bonous = 1300;
// var luongTrungBinhNam2 = (monthSalary.January + monthSalary.February + monthSalary.March + monthSalary.April + monthSalary.May +monthSalary.June + monthSalary.July + monthSalary.August + monthSalary.September + monthSalary.October + monthSalary.November + monthSalary.December + monthSalary.bonous)/13;
// console.log(luongTrungBinhNam2);

// Bài 4:
// Cho array sau  : var arr =
// [1,2,’Nam’,”Hải”,5,8, “Huy” ,3,6,”Nấm”] ;

// Truy vấn đến các phần tử có vị trí index (vị trí )là 0 ; 3 ;5 và in chúng ra bằng console.log . 
// Ghi đè phần tử có vị trí là 2 ,thành tên của bạn . và truy vấn và in kết quả ra bằng console.log . 


// Ghi đè phần tử có  thứ tự là 2 , thành số 100 . và truy vấn và in kết quả ra bằng console.log . 
//  truy vấn phần tử cuối cùng và đầu tiên của Array và  sử dụng console.log in ra kết quả dưới dạng sau : 
// “ Phần tử đầu tiên là … 	 … “
//  điền qua sau khi truy vấn vào dấu  …  .
// var arr =
// [1,2,'Nam','Hải',5,8, 'Huy' ,3,6,'Nấm'] ;
// console.log(arr[0],arr[3],arr[5]);
// arr[2] = 'Thái';
// console.log(arr[2]);
// arr[1] = 100;
// console.log(arr[1]);
// console.log(`Phan tu dau tien la ${arr[0]}, phần tử cuối cùng là ${arr[arr.length-1]}`) ;

// =============================================================================================

// Bài 5:
// Cho Array sau : 
// var arr2= [“Lâm”,”Hải”, “Huy”, “Anh”, “Duy”] ;
// sử dụng console.log in ra số lượng phần tử có trong Array
// Truy vấn phần tử đầu và phần tử cuối của Array trên và  sử dụng console.log in ra kết quả . 
// Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
// sử dụng console.log in ra kết quả . 
// Chỉnh sửa( ghi đè )  phần tử có  thứ tự là 4 thành “ Thái “ .   
// sử dụng console.log in ra kết quả 

// arr= ['Lâm','Hải', 'Huy', 'Anh', 'Duy'];
// console.log(arr.length);
// console.log(arr[0], arr[arr.length-1]);
// [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]]
// console.log(arr);
// arr[3] = 'Thai';
// console.log(arr);

// =============================================================================================
// B6 = [5,1,5]
// B7x = [10,3,5]
// B7y = [0,6,7]
// B8 = [8,3,5,8]
// B9 = [8,3,5,1]


// ===============================================================================================

// Bài 10  : 
// var luongt5 = {
// Anh:1222000,
// Duy:2250000,
// Thai:222225455
// }

// sử dụng console.log để in ra số lương của Duy . 
// Sửa lại tiền lương của Thái là 40000000 . 
// Tính tổng tiền lương của Anh , Duy và Thái . 
// Thêm bạn Trường với tiền lương là 4444444
// Sử dụng console.log để in ra kết như sau : Tổng Lương Tháng 5 của Anh , Duy , Thái,Trường  là … (ghi kết quả tại dấu …) . 

// var luongt5 = {
//     Anh:1222000,
//     Duy:2250000,
//     Thai:222225455
//     };
// console.log(luongt5.Duy);
// luongt5.Thai = 40000000;
// console.log(luongt5.Anh + luongt5.Duy + luongt5.Thai);
// luongt5.Truong = 4444444;
// console.log(`Tổng Lương Tháng 5 của Anh, Duy, Thái, Trường là:${luongt5.Anh + luongt5.Duy + luongt5.Thai + luongt5.Truong}`);

// =============================================================================================


// Bài 11: 

// Cho array sau : 
// var arr004 = [1,13,5,7,8,9,[6,9,12,5],10,[12,21,3],24, 22];
// Truy vấn phần tử đầu và phần tử  cuối của 
// array con thứ 1 và  array con thứ 2  của arr004.
// Tính tổng phần tử đầu và cuối arr004 và array con thứ 1 và 2  . 
// thêm 2, vào cuối arr004 rồi tính lại câu b .

// var arr = [1,13,5,7,8,9,[6,9,12,5],10,[12,21,3],24, 22];
// console.log(arr[6][0], arr[6][arr[6].length-1], arr[8][0], arr[8][arr[8].length-1] );
// console.log(arr[0] + arr[arr.length-1] + arr[6][0] + arr[6][arr[6].length-1] + arr[8][0] + arr[8][arr[8].length-1] );
// arr[arr.length-0] = 2;
// console.log(arr[0] + arr[arr.length-1] + arr[6][0] + arr[6][arr[6].length-1] + arr[8][0] + arr[8][arr[8].length-1] );

// ================================================================================================


// Bài 12: 
// var arr1 = [1,12,3,5,7,8,9,15,2] ; 

// var arr2 =  [7,2,3,5,3,8,9,15,2] ; 
// Truy vấn đến phần tử đầu và cuối của 2 arr1 và arr2 .
// Đảo vị trí đầu và cuối của cả 2 array trên. 
// Tính tổng (+) , hiệu(-) của các phần tử đã tìm được ở câu a.
// Thêm [7,9,11,13] vào arr1  , [1,5,7 ] vào arr2 .Truy vấn và tính tổng tất cả các phần tử  của arr1 co	n  và arr2  con . 
// Tính lại câu c .


// var arr1 = [1,12,3,5,7,8,9,15,2] ; 
// var arr2 =  [7,2,3,5,3,8,9,15,2] ;
// console.log(arr1[0],arr1[arr1.length-1],arr2[0],arr2[arr2.length-1]);
// [arr1[0],arr1[arr1.length-1]] = [arr1[arr1.length-1],arr1[0]];
// [arr2[0],arr2[arr2.length-1]] = [arr2[arr2.length-1],arr2[0]];
// console.log(arr1,arr2);

// [arr1[0],arr1[arr1.length-1]] = [arr1[arr1.length-1],arr1[0]];
// [arr2[0],arr2[arr2.length-1]] = [arr2[arr2.length-1],arr2[0]];
// var tong1 = arr1[0] + arr1[arr1.length-1];
// var tong2 = arr2[0] + arr2[arr2.length-1];
// var hieu1 = arr1[0] - arr1[arr1.length-1];
// var hieu2 = arr2[0] - arr2[arr2.length-1];
// console.log(tong1, tong2, hieu1, hieu2);

// arr1[arr1.length-0] = [7,9,11,13];
// arr2[arr2.length-0] = [1,5,7];
// var tongCon1 = arr1[arr1.length-1][0] + arr1[arr1.length-1][1] + arr1[arr1.length-1][2] + arr1[arr1.length-1][3]
// console.log(tongCon1);
// var tongCon2 = arr2[arr2.length-1][0] + arr2[arr2.length-1][1] + arr2[arr2.length-1][2]
// console.log(tongCon2);

// var tongCon3 = arr1[arr1.length-1][0] + arr1[arr1.length-1][3];
// var tongCon4 = arr2[arr2.length-1][0] + arr2[arr2.length-1][2];
// var hieuCon3 = arr1[arr1.length-1][0] - arr1[arr1.length-1][3];
// var hieuCon4 = arr2[arr2.length-1][0] - arr2[arr2.length-1][2];
// console.log(tongCon3, tongCon4, hieuCon3, hieuCon4);
// ===============================================================================================



// Bài 13: 
// var data_ex2 = [1, 2, 'a', 3, '2', 1, 'c', 2, 3, 4, 'c', '3', 5, 6, 5, 4, 6, 'a']

// Nếu ta ‘Cộng, trừ, nhân, chia’ 1 số với các ký tự trong data_ex2 thì điều gì sẽ xảy ra (liệt kê hết tất cả trường hợp).
// string là số thì ép kiểu và cộng trừ nhân chia như bt
// string là chữ thì ra NaN
// number thì cộng trừ nhân chia như bình thường



// Bài 14:
// var Nodemy = [
//     {
//         ho: 'Nguyen',
//         ten: 'A',
//         class: 'b1',
//         subject: [{
//             name: 'html'
//         },{
//             name: 'css'
//         },{
//             name: 'js'
//         }]
//     }, {
//         ho: 'Tran',
//         ten: 'B',
//         class: 'b2',
//         subject: [{
//             name: 'React'
//         },{
//             name: 'js'
//         }]
//     }, {
//         ho: 'Nguyen',
//         ten: 'C',
//         class: 'b3',
//         subject: [{
//             name: 'css'
//         },{
//             name: 'React'
//         }]
//     }, {
//         ho: 'Dang',
//         ten: 'D',
//         class: 'b1',
//         subject: [{
//             name: 'css'
//         },{
//             name: 'js'
//         },{
//             name: 'React'
//         }]
//     }]

// in ra họ và tên của các thành viên trong lớp học
// Đổi tên môn học html thành Ruby
// thêm 1 thành viên mới có tên là Hoang Van Duy lớp b4 học môn (html, css, js, react)
// tính tổng tất cả các môn học mà học viên đã học (lưu ý: tính cả thành viên mới thêm ở ý C)


var Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{
            name: 'html'
        },{
            name: 'css'
        },{
            name: 'js'
        }]
    }, 
    {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{
            name: 'React'
        },{
            name: 'js'
        }]
    },
    {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{
            name: 'css'
        },{
            name: 'React'
        }]
    },
    {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{
            name: 'css'
        },{
            name: 'js'
        },{
            name: 'React'
        }]
    }]













