class Question {
    id;
    TextQues;
    answer;

    constructor(id, TextQues, answer) {
        this.id = id;
        this.TextQues = TextQues;
        this.answer = answer;
    }

    showQues() {
        console.log(`
        ID: ${this.id} - Ques: ${this.TextQues} ?
        Answer: ...
        `)
        console.log(`---------------------------------------------------------`);
    }
}

export {Question};