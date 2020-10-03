
import App from "./App.js";
import Person from "./Person.js";
import Place from "./Place.js";

let app1 = new App();

while(true) {
    let inputUser = prompt(`1-Thêm người mới vào App || 2 - Tìm F1,F2 từ F0 || 3 - Muốn xóa thằng nào ?`);
    
    if(inputUser == 1){
        app1.addPerson();
        console.log(`Danh sách thanh niên trong App: `);
        app1.showPersons();
    }
    else if(inputUser == 2){
        let teleF0 = prompt("Input telephone F0: ");
        let perF1 = app1.findF1(teleF0);
        console.log(`Những thằng F1 :`);
        perF1.forEach((x) => {
          x.showPer();
        });
        
    app1.findF2(teleF0);
    }
    else if(inputUser == 3){
        app1.delePerson();
         console.log(`Danh sách thanh niên trong App: `);
        app1.showPersons();
    }
    else  break;
}

//Địa điểm để test
// let place1 = new Place("Ha Noi", [100, 200]);
// let place2 = new Place("Hai Duong", [3, 2]);
// let place3 = new Place("Nghe An",[7,8]);

// let per1 = new Person('Thanh','1234');
// let per2 = new Person('Tuan','0987');
// let per3 = new Person('Long','11111');

// per1.addPlace(place1);
// per1.addPlace(place2);
// per2.addPlace(place3);
// per3.addPlace(place3);
