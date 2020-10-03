 export default class Place {
    namePlace;
    xy = new Array();

    constructor(namePlace, xy){
        this.namePlace = namePlace;
        this.xy.push(xy);
    }

    updatePlace(name, xy){
        this.namePlace = name;
        this.xy = xy;
    }

    showPlace(){
        console.log(`
         Name place: ${this.namePlace} - Tọa độ : (X: ${this.xy[0][0]},Y: ${this.xy[0][1]})
        `)
    }
}

