// Bài 0: var str = 'Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng. Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”.'
// Hãy đổi các ‘em’ thành EM
// Đoạn văn trên có bao nhiêu ký tự
// Lấy ra câu “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng’’. đưa về mảng chứ từng ký tự.
// kiểm tra xem đoạn văn trên bắt đầu bằng “Hôm”. Nếu đúng thay thế thành “Ngày

var str = 'Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng. Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”.'
var newStr = str.replace(/em/gi, "EM");
// console.log(newStr);

var demKyTu = str.length;
// console.log(demKyTu);

var layCau = str.search("đáng lẽ Bé Còi nhà ta phải là con trai mới đúng")
// console.log(layCau);
var layCau2 = str.slice(181)
// console.log(layCau2);

var check = str.includes('Hôm')
// console.log(check);
var replace = str.replace('Hôm', 'Ngày')
// console.log(replace);

var arr = ['thai', 'linh', 'tung', 'quan', 'khang']
// hãy tạo danh sách có tên viết hoa chữ đầu [‘Thai’,’Linh’,...]

var newArr = arr.map(function(value){
    return value.charAt(0).toUpperCase() + value.slice(1)
})
console.log(newArr);

