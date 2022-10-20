// /**
//  *
//  * @param {Array} arr
//  * @param {function} cb
//  * @returns {Number} so lan dem dc
//  */
// function countByCondition(arr, cb){
//     let count = 0;
//     arr.forEach(element =>{
//         if(cb(element)){
//             count++
//         }
//     })
//     return count
// }
// var people = [
//     {name: 'Thai', money: 1000},
//     {name: 'Hai', money: 1000},
//     {name: 'Le', money: 1000},
// ]
// var total = countByCondition (people,function(item){
//     return people.money
// })
// console.log(total)

// Bài 1: cho array = [1,5,6,8,7,9]
// hãy copy array trên ra array mới newArr
// trong newArr hãy thêm số 100 vào cuối sao cho array không bị thay đổi

// var array = [1,5,6,8,7,9]
// var newArr = array
// newArr[6]= 100;
// console.log(newArr)

// Bài 2:cho for(let i =0;i< 10;i++){}
// console.log(i);
// giá trị của i là gì? Nếu thay let bằng var thì giá trị
// của i có thay đổi như thế nào k? Tại sao?

// Bài 3:
// let a = 30;
//-) Gán giá trị biến của a thành 'số 30'
// -) Cho array1 = [1,2,3,4,[123]]
// Hãy tạo ra string từ array1 và biến đổi lại thành kiểu dữ liệu ban đầu
// Hãy tạo ra array2 là copy của array1 và thêm 10 giá trị bất kỳ trong khoảng từ 0 đến 20 vào array2

// Bài 4:
var obj1 = [
  { ten: "nam", soDiem: 10, diemVung: 1 },
  { ten: "linh", soDiem: 6, diemVung: 3 },
  { ten: "phan", soDiem: 7, diemVung: 2 },
  { ten: "pham", soDiem: 8, diemVung: 1 },
];

vung = [
  { vung: 1, cong: 0 },
  { vung: 2, cong: 1 },
  { vung: 3, cong: 2 },
];
// Hãy tạo danh sách điểm thi sau khi cộng điểm vùng sao cho dữ liệu ở obj1 không thay đổi

for (let i = 0; i < obj1.length; i++) {
  for (let j = 0; j < vung.length; j++) {
    console.log(vung[j]);
  }
}


// nhanSU = [
//     {ten: 'nguyen the su', phong: 'Hanh Chinh'}, 
//     {ten: 'nguyen van duc', phong: 'coder'}, 
//     {ten: 'lai the van', phong: 'coder'}, 
//     {ten: 'le van luong', phong: 'coder'}, 
//     {ten: 'ngo thi thao', phong: 'tester'}, 
//     {ten: 'dao linh huong', phong: 'tester'}, 
//     {ten: 'nguyen thi tra my', phong: 'Hanh Chinh'}, 
// ]

// chiTieu = [
//     {tenPhong: 'Hanh Chinh', chiTieu: 1200, luongCB: 1800},
//     {tenPhong: 'coder', chiTieu: 2000, luongCB: 2500},
//     {tenPhong: 'tester', chiTieu: 1300, luongCB: 1500},
// ]

// baoCaoCV = [
//     {tenNV: 'nguyen the su', soHT:300},
//     {tenNV: 'nguyen van duc', soHT:500},
//     {tenNV: 'nguyen the su', soHT:150},
//     {tenNV: 'lai the van', soHT:300},
//     {tenNV: 'nguyen the su', soHT:300},
//     {tenNV: 'ngo thi thao', soHT:240},
//     {tenNV: 'dao linh huong', soHT:500},
//     {tenNV: 'nguyen thi tra my', soHT:120},
//     {tenNV: 'dao linh huong', soHT:300},
//     {tenNV: 'ngo thi thao', soHT:360},
//     {tenNV: 'le van luong', soHT:400}
// ]
// Hãy dựa vào các bảng trên để tính lương cuối cùng của mỗi người trong array nhanSU biết nếu mà phòng ban của những 
// người đó hoàn thành được chỉ tiêu trong bảng chiTieu thì lương của mỗi người được cộng 10% lương 
// Nếu k hoàn thành chỉ tiêu thì bị trừ đi 2% lương
// Biết tổng chỉ tiêu của mỗi phòng đạt được bằng tổng số phần công việc của từng thành viên trong phòng đó đã thực hiện được khai báo 
// là soHT trong array baoCaoCV

var nhanSU = [
    {ten: 'nguyen the su', phong: 'Hanh Chinh'}, 
    {ten: 'nguyen van duc', phong: 'coder'}, 
    {ten: 'lai the van', phong: 'coder'}, 
    {ten: 'le van luong', phong: 'coder'}, 
    {ten: 'ngo thi thao', phong: 'tester'}, 
    {ten: 'dao linh huong', phong: 'tester'}, 
    {ten: 'nguyen thi tra my', phong: 'Hanh Chinh'}, 
]

var chiTieu = [
    {tenPhong: 'Hanh Chinh', chiTieu: 1200, luongCB: 1800},
    {tenPhong: 'coder', chiTieu: 2000, luongCB: 2500},
    {tenPhong: 'tester', chiTieu: 1300, luongCB: 1500},
]

var baoCaoCV = [
    {tenNV: 'nguyen the su', soHT:300},
    {tenNV: 'nguyen van duc', soHT:500},
    {tenNV: 'nguyen the su', soHT:150},
    {tenNV: 'lai the van', soHT:300},
    {tenNV: 'nguyen the su', soHT:300},
    {tenNV: 'ngo thi thao', soHT:240},
    {tenNV: 'dao linh huong', soHT:500},
    {tenNV: 'nguyen thi tra my', soHT:120},
    {tenNV: 'dao linh huong', soHT:300},
    {tenNV: 'ngo thi thao', soHT:360},
    {tenNV: 'le van luong', soHT:400}
]
