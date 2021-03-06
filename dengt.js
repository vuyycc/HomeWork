//B1
* Khái niệm
- Lập trình hướng đối tượng là một kỹ thuật lập trình cho phép lập trình viên tạo ra các đối tượng trong code trừu tượng hóa các đối tượng thực tế trong cuộc sống.

- Một đối tượng bao gồm 2 thông tin: Thuộc tính và Phương thức:
 + Thuộc tính chính là những thông tin, đặc điểm của đối tượng.
 + Phương thức là những thao tác, hành động mà đối tượng đó có thể thực hiện.

* 4 tính chất:
- Tính đóng gói (Encapsulation) 
+ Các dữ liệu và phương thức có liên quan với nhau được đóng gói thành các lớp để tiện cho việc quản lý và sử dụng. Tức là mỗi lớp được xây dựng để thực hiện một nhóm chức năng đặc trưng của riêng lớp đó.
- Tính kế thừa (Inheritance)
+ Lớp cha có thể chia sẽ dữ liệu và phương thức cho các lớp con. Các lớp con không phải định nghĩa lại, ngoài ra có thể mở rộng các thành phần kế thừa và bổ sung thêm các thành phần mới. Tái sử dụng mã nguồn 1 cách tối ưu, tận dụng được mã nguồn. Một số loại kế loại kế thừa thường gặp: đơn kế thừa, đa kế thừa, kế thừa đa cấp, kế thừa thứ bậc.
- Tính đa hình (Polymorphism)
+ Là một đối tượng thuộc các lớp khác nhau có thể hiểu cùng một thông điệp theo cách khác nhau.
-Tính trừu tượng(Abstraction):
+ Tính trừu tượng là một tiến trình ẩn các chi tiết trình triển khai và chỉ hiển thị tính năng tới người dùng. Tính trừu tượng cho phép bạn loại bỏ tính chất phức tạp của đối tượng bằng cách chỉ đưa ra các thuộc tính và phương thức cần thiết của đối tượng trong lập trình.
+ Tính trừu tượng giúp bạn tập trung vào những cốt lõi cần thiết của đối tượng thay vì quan tâm đến cách nó thực hiện.



//B2
let $clock = document.getElementById("dongho");
let $box_0 = document.getElementById("box-0");
let $box_1 = document.getElementById("box-1");
let $box_2 = document.getElementById("box-2");


var color = ["green", "yellow", "red"];
var time = [20, 3, 10];


function chuyenDen(i) {
    if(color[i] == "green"){
        $box_2.style.backgroundColor = "white";
        $box_0.style.backgroundColor = "green";
        $box_1.style.backgroundColor = "white";
    }else if(color[i] == "yellow"){
        $box_0.style.backgroundColor = "white";
        $box_1.style.backgroundColor = "yellow";
        $box_2.style.backgroundColor = "white";
    }else{
        $box_1.style.backgroundColor = "white";
        $box_2.style.backgroundColor = "red";
        $box_0.style.backgroundColor = "white";
    };
   count(time[i], i);
}


function count(gt, i) {
    gt--;
    if(gt != -1){       
        $clock.innerHTML = gt;
        setTimeout(count, 1000, gt, i);
    } else {
        if((i+1) < 3) {
            chuyenDen(i+1);
        } else {
            chuyenDen(0);
        }
    }
}



//B3
var strNum = prompt();
var arrNum = strNum.split(',');
console.log(arrNum);
var arrNum1 = arrNum.filter((x, y) => arrNum.indexOf(x) === y);
var arrNum2 = arrNum.filter((x, y) => arrNum.indexOf(x) != y);
arrNum2.forEach((x) => {
    if(arrNum1.includes(x)){
        arrNum1.splice(arrNum1.indexOf(x), 1);
    }
});
console.log(arrNum1);




 