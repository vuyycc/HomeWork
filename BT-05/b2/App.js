import Place from "./Place.js";
import Person from "./Person.js";

export default class App {
    persons;
    places;

    constructor() {
        this.persons = new Array();
        this.places = new Array();

    }

    addPerson(){
        let name = prompt("Name new person: ");
        let tele = prompt("Telephone new person: ");
        if(name =="" || tele == ""){
            alert(`Không được để trống?`);
            this.addPerson();
        }
        let person = new Person(name, tele);
        let check = true;
        while(check){
           let place = this.addPlace();
           person.addPlace(place);
           let yn = prompt("Thêm tiếp địa điểm mà người này đi qua ? (y/n) ");
           if(yn == 'n'){
               check = false;
           }
        }
         this.persons.push(person);
    }

    addPlace(){
        let name = prompt("Tên địa điểm đã đi qua: ");
        let xy = prompt("Tọa độ (,) : ");
        xy = xy.split(",");
        let place = new Place(name, xy);
        return place;
    }

    updatePerson(){
        let idPerson = prompt("Nhập id person cần cập nhật: ");
        let name = prompt("Nhập tên thay đổi: ");
        let tele = prompt("Nhập số điện thoại thay đổi: ");
        let foundTest = this.persons.find(function(person) {
            return person.id == idPerson;
        })
        if(foundTest =! null){
            foundTest.update(name, tele);
        }
    }

    delePerson(){
        let telePerson = prompt("Nhập số điện thoại cần xóa: ");
        this.persons = this.persons.filter(function(person){
            return person.telephone != telePerson;
        });
    }

    showPersons(){
        this.persons.forEach((ele) => {
            ele.showPer();
        })
    }

    findF1(teleF0){
        let personF0 = this.persons.find(function(person) {
            return person.telephone == teleF0;
        })

        let personF = this.persons.filter(function(person) {
            return person.telephone != teleF0;
        })

        let perF1 = [];

        for(let i = 0; i < personF0.placeW.length; i++){
            let xF0 = personF0.placeW[i].xy[0][0];
            let yF0 = personF0.placeW[i].xy[0][1];

            for(let j = 0; j < personF.length; j++){

                for(let k = 0; k < personF[j].placeW.length; k++){
                    let xF1 = personF[j].placeW[k].xy[0][0];
                    let yF1 = personF[j].placeW[k].xy[0][1]
                    let kc = Math.sqrt((xF1 - xF0)*(xF1-xF0)+(yF1 - yF0)*(yF1 - yF0));
                    if(kc <= 100){
                        perF1.push(personF[j]);
                        break;
                    }
                }
            }
        }
        return perF1;
        
    }

    findF2(teleF0){
        let arrF1 = this.findF1(teleF0);
       
        arrF1.forEach((f1) => {
           let arrF2 = this.findF1(f1.telephone);

           if(arrF2 != []){
               console.log(`Những thằng F2 từ thằng F1 - ${f1.name}: `)
               arrF2.forEach((x) => {
                   if(x.telephone != teleF0){
                   x.showPer();
                   }
               })
           }
        })
    }

}
