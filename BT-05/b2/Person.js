import Place from "./Place.js";

export default class Person {
    id;
    name;
    telephone;
    placeW;

    constructor(name,telephone){
        this.id = uuid.v4();
        this.name = name;
        this.telephone = telephone;
        this.placeW = new Array();
    }

    addPlace(place){
        if(place instanceof Place){
            this.placeW.push(place);
        }
    }

    delePlace(placeId) {
       this.placeW = this.placeW.filter(function(place) {
            return place.id != placeId;
        });
    }

    update(name, telephone){
        this.name = name;
        this.telephone = telephone;
    }

    showPer(){
        console.log(`
        ID: ${this.id} - Name: ${this.name} - Telephone: ${this.telephone}
        `)
        this.placeW.forEach((ele) => {
            ele.showPlace();
        })
    }

} 