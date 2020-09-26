
import {Question} from "./Question.js";
import {ChoiceQues} from "./ChoiceQues.js";
import {Test} from "./Test.js";


let q1 = new ChoiceQues(1,"How many balloons",'three','one,two,six,seven');
let q2 = new Question(2,"Why does the cat have 4 legs","I don't know 😂😂");
let q3 = new ChoiceQues(3,"What is this","door","door,car,teddy");

let test1 = new Test(1,"Test English",60,[q1,q2],"25/09/2020");



while(true){
    const cn = prompt(`What do you wnat to do today? 
>> A(Add question) - S(Show test) - E(Edit question in Test) - D(Delete question in Test) <<`);

if(cn == 'S'){
    test1.showTest();
}
else if(cn == 'A'){
    test1.addQuest(q3);
}
else if(cn == 'E'){
    let id = Number(prompt(`Enter ID: `));
    test1.editQues(id);
}
else if(cn == 'D'){
    let id = Number(prompt(`Enter ID: `));
    test1.deteQues(id);
}else break;
}



