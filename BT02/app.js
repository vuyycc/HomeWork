// //Tìm hiểu Setters
// // - Là các hàm hoặc phương thức được sử dụng để đặt các giá trị của các biển.
// // - Giúp đảm bảo tính đóng gói của dữ liệu ,bảo mật không làm thay đổi các thuộc tính trong lớp.

// //B2
// class Person {
//     name;
//     age;
//     sex;
//     address;

//     constructor(name, age, sex, address) {
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//         this.address = address;
//     }

//     speak() {
//         console.log("Hello Work");
//     }

//     introduce() {`
//     Tên của tôi ${this.name},
//     Tuổi của tôi ${this.age},
//     Giới tính ${this.sex},
//     Địa chỉ là ${this.address},
//     `}
// }

// class Crush extends Person {
//     favorites;
//     appearance;

//     constructor (name, age, address, favorites, appearance){
//         super(name, age,'F',address);
//         this.favorites = favorites;
//         this.appearance = appearance;
//     }

//     speak() {
//         console.log("Hi ! I'm Crush");
//     }
// }

// let huong = new Crush("Huong",21,"Ba Vi","cold","cold");
// let anh = new Crush("Anh",19,"Phu Tho","Hot","Hot");
// let nhung = new Crush("Nhung",24,"Ha Tinh","Small","Small");


// class OldGirlFriend extends Person {
//     appearance;

//     constructor (name, age, address, appearance) {
//         super(name, age,'F',address, appearance);
//         this.appearance = appearance;
//     }

//     speak() {
//         console.log("Hello ! I'm Old Girl Friend");
//     }
// }

// let linh = new OldGirlFriend("Linh",22,"Ha Noi","Beaty Girl");
// let thao = new OldGirlFriend("Thao",21,"Hai Duong","Cute Girl");
// let Trang = new OldGirlFriend("Thuy",18,"Da Nang","Good Girl");

// class List {
//     owner;
//     persons;

//     constructor(owner, persons) {
//         this.owner = owner;
//         this.persons = persons;
//     }

//     get showAll() {
//         this.persons.forEach(element => {
//             console.log(element);
//         });
//     }

//      addPerson(person) {
//         this.persons.push(person);
//     }
// }

// let test = new List("Vu", [linh]);
// test.addPerson(nhung);
// test.addPerson(thao);
// test.showAll;

function testStr(str1, str2) {
    let check = true;
    let strArr = str2.split('');
    if(str1.length == str2.length){
        for(let i = 0; i < str1.length; i++){
            if(strArr.includes(str1[i])){
                let index = strArr.indexOf(str1[i]);
                strArr.splice(index, 1);
        
                check = true;
            }
            else {
                check = false;
                break;
             }
         }
    } else {
        check = false;
    }   
        console.log(check);
    }
  
    testStr("hanh","ahnh");
    testStr("abxo","abxk");
    testStr("abxds","abb");
