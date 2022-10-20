// 500gb
// mỗi s + random 1-10; den khi đủ 500 thì thôi
// mỗi s hiển thị % tiến độ

var target = 500;
var step = Math.random() * 9 //random tu 1-10
var current = 0;

setInterval(()=>{
    var step = 1 + Math.round(Math.random()* 9)
    current += step
    current = current >500 ? 500 : current 

    var process = current/target
    console.log((process * 100).toFixed(2) + '%')
    if(process == 1){
        
    }

})