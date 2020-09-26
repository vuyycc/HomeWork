import {Question} from "./Question.js";

class ChoiceQues extends Question {
    choiceAnswer = new Array();

    constructor(id, TextQues, answer, choiceAnswer) {
        super(id, TextQues, answer)
        this.choiceAnswer = choiceAnswer.split(',');
    }

    showQues() {
        console.log(`
        ID: ${this.id} - Ques: ${this.TextQues} ?
        `)

        let i = 1;
        this.choiceAnswer.forEach(ele => {
            console.log(`-- ${i}.${ele} --`);
            i++;
        })
        console.log(`---------------------------------------------------------`);
    }
}

export {ChoiceQues};