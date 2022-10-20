// Bài 0: Thực hiện các phép toán sau:
// (8 + "10" + "11" - "12" + "13" + "14" + 10);
// ("1" + "2" + 3 - 4 + 5 * "6" + "7" + "8" + "9" + 10 * 0)

// console.log( 8 + '10' + '11' - '12' + '13' + '14' + 10)
// console.log('1' + '2' + 2 - 4 + 5 * '6' + '7' + '8' + '9' +10 *0)

// ============================================================================

// Bai 1
// var x = 2
// var a = 8 + x++ + ++x - --x + x++ + 7   | 8+2+4-3+3+7
// var b = 5 + ++x + ++x + --x - x-- - ++x  + 10  | 5+3+4+3-3-3+10
// var c = 1 + x-- + --x - ++x + --x - 11   |  1 + 2 + 0 - 1 + 0 -11
// var d = 15 + --x + --x - x++ +--x + 12   |  15 + 1 + 0 - 0 + 0 +12 
// a,b,c d có giá trị là bao nhiêu ?
// a = 21 , b = 19, c = -9, d = 28

// ====================================================================================

// Bài 3:
// Cho biến password là 1 string bất kỳ
// Nếu password để trống thì in ra ‘password không để trống’
// Nếu password nhỏ hơn 8 ký tự hoặc password dài hơn 16 ký tự thì in ra ‘password k hợp lệ’
// Nếu không bị những lỗi trên thì in ra password hợp lệ 

// var password = 'sdfa42s34';
// if(password == 0){
//     console.log('password không để trống');
// }
// if(16 < password < 8 ){
//     console.log('password k hợp lệ');
// }else{
//     console.log('password hợp lệ');
// }
// Bài 4 : 
// Khai báo x ;y lần lượt là chiều dài và chiều rộng  của hình chữ nhật A 
// tính chu vi của hình Chữ nhật A
// Tính diện tích của hình chữ nhật A
//  Kiểm tra xem A có phải hình vuông không ?

// var x = 4;
// var y = 6;
// var chuVi = (x+y)*2;
// var dienTich = x * y;
// console.log('Chu vi là: ',chuVi , 'Diện tích là:', dienTich);
// if(x === y ){
//     console.log('Là hình vuông:')
// }
// else{
//     console.log('Không là hình vuông:')
// }
// =======================================================================================

// Bài 5: 
// Khai báo một  biến diem với  giá trị số  bất kỳ
// Nếu diem < 0 thì in ra “ không hợp lệ “ 
// Nếu  0 < =  diem  <  5 in ra  “ kém “ 
// Nếu 5 < = diem < 6.5 in ra “ Trung bình” 
// Nếu 6.5 < =  diem  < 8 thì in ra “ Khá” 
// Nếu 8 < =  diem < = 10 thì in ra “Giỏi” 
// Trường hợp còn lại  in ra “ Không hợp lệ “  

// var diem = 8;
// if(diem < 0){
//     console.log('Không hợp lệ');
// }else{
//     if(diem <=5) {
//         console.log('Kém');
//     }
//     else if (diem <=6.5){
//         console.log('Trung bình');
//     }
//     else if(diem <=8){
//         console.log('Khá');
//     }
//     else if(diem <= 10){
//         console.log('Giỏi');
//     }
// }
// ==========================================================================


// Bài 6: 
//  Khai báo biến a ; b ; c lần lượt là  chiều cao , chiều rộng , chiều dài của một hình hộp chữ nhật . 
// a ) Tính thể tích V của hình hộp chữ nhật trên (V=a*b*c )  
// b ) Kiểm tra xem Hình hộp chữ nhật trên có phải la hình lập phương hay không . Nếu có thì tính thể tích của hình Lập phương trên  . 
// c ) Tinh đường chéo D của hình hộp chữ nhật trên . 
// d ) tính chu vi P của hình hộp chữ nhật  
// e ) Tính diện tích xung quanh của hinh hộp chữ nhật trên  .  

// var a = 6;
// var b = 6;
// var c = 6;
// var theTich = a*b*c;
// console.log(theTich);
// if(a ===b && a===c && b===c){
//     console.log('Là hình lập phương');

// }else{
//     console.log('Không là hình lập phương');
// }
// var theTichLapPhuong = a**3;
// console.log('Thể tích hình lập phương là: ' , theTichLapPhuong);
// var duongCheo = a **(2/2) + b**(2/2) + c**(2/2);
// console.log(duongCheo);

