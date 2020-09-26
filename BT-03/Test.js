class Test {
    id;
    name;
    time;
    Question = new Array();
    dateCreate;

    constructor(id, name, time, Question, dateCreate){
        this.id = id;
        this.name = name;
        this.time = time;
        this.Question = Question;
        this.dateCreate = dateCreate;
    }

    addQuest(ques) {
        this.Question.push(ques);
        this.showTest();
    }

    deteQues(id){
        for(let i = 0; i < this.Question.length; i++){
            if(this.Question[i].id == id){
                this.Question.splice(i, 1);
                console.log("Delete");
                break;
            }
        }
        this.showTest();
    }

    editQues(id){

        for(let i = 0; i < this.Question.length; i++){
            if(this.Question[i].id == id){
                let ans = Number(prompt(`Edit 1.id - 2.Question - 3.Answer - 4.ChoiceAnswer`));
                let text = prompt(`Text(,): `);
                if(ans == 1){
                    this.Question[i].id = Number(text);
                }
                else if(ans == 2){
                    this.Question[i].TextQues = text;
                }
                else if(ans == 3){
                    this.Question[i].answer = text;
                }else this.Question[i].choiceAnswer = text.split(',');
            }
        }
        this.showTest();
    }

    showTest(){
        console.log(`
                                =====- TEST QUESTION -=====

        Test ID: ${this.id} -- Name: ${this.name} -- Time: ${this.time} -- Date Created: ${this.dateCreate}
        `)
        this.Question.forEach(ele => {
            ele.showQues();
        })
    }

}

export {Test};