// Biến được khai báo bên trong hàm sẽ là biến cục bộ, và biến cục bộ thì có thể được truy cập bên trong hàm (không có khái niệm scope trong 1 khối lệnh).
// Biến được khai báo bên ngoài hàm sẽ là biến toàn cục, và có thể được truy cập từ bất cứ đâu.
  "use strict"
function testScope()
{
    var local_var_1 = global_var_1 = "inside_function";
    if(true){
        var local_var_2 = "inside IF";
    }
    console.log("Test local_var_1 inside function: " + local_var_1);
    console.log("Test local_var_2 inside function: " + local_var_2);
}

testScope();
console.log("Test local_var_1 outside function: " + local_var_1);
console.log("Test global_var_1 outside function: " + global_var_1);


var num = 5;
typeof(num);          //”number”
 
//chạy lệnh lấy bình phương của số đó
num.square();        // Uncaught TypeError: num.square is not a function
//Mọi người thử trả lời câu hỏi tại sao lệnh lấy bình phương square() lại báo lỗi? Nếu bạn cho rằng kiểu dữ liệu number không có sẵn phương thức square() thì bạn đã trả lời đúng rùi đấy. Vậy câu hỏi đặt ra tiếp theo là: làm thế nào để ta khiến cho câu lệnh đó thực thi đúng như mong đợi? một trong số cách để giải quyết:

Number.prototype.square = Number.prototype.square || function(){return this*this;};
 
//Gọi thử lệnh để xem kết quả xem nào:
num.square();               //25



//Cách thứ nhất
var printHocsinhName = Hocsinh.printName.bind(Hocsinh);
printHocsinhName();                                      // John
 
//Hoặc cách thứ 2
var printHocsinhName = Hocsinh.printName;
printHocsinhName.call(Hocsinh);                          // John
 
//Xử lí Hocsinh.printName
Hocsinh.printName.call(window);                           //Peter


//https://viblo.asia/p/16-khai-niem-javascript-can-phai-nam-ro-phan-1-javascript-object-gGJ59jR9KX2