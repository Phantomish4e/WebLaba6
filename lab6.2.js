class Challenge{
    constructor(subject){
        this.subject=subject;
    }
}

class Test extends Challenge{
    constructor(subject, question){
        super(subject);
        this.question=question;
    }
}

class Exam extends Test{
    constructor(subject, question, ticket){
        super(subject, question);
        this.ticket=ticket;
    }
}

class finalExam extends Exam{
    constructor(subject, question, ticket, score){
        super(subject, question, ticket);
        this.score=score;
    }
}

class Question{
    constructor(questionQ, answer, correctAnswer){
        this.questionQ=questionQ;
        this.answer=answer;
        this.correctAnswer=correctAnswer;
    }
}

const ExamsQuetstions=[
    [
    new Question("q1",[1,2,3],1),
    new Question("q2",[1,2,3,4],4),
    new Question("q3",[1,2,3,4,5],3),
    new Question("q4",[1,2],2)],
    [
    new Question("q1",[1,2,3],1),
    new Question("q2",[1,2,3,4],4),
    new Question("q3",[1,2,3,4,5],3)],
    [
    new Question("q1",[1,2,3],1),
    new Question("q2",[1,2,3,4],4),
    new Question("q3",[1,2,3,4,5],3),
    new Question("q4",[1,2],2),
    new Question("q3",[1,2,3,4,5,6],6)]
]

const FinalExam=new finalExam("s1",ExamsQuetstions[0],1,2);
console.log(FinalExam);