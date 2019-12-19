const express = require('express');
const path = require("path");
var bodyParser = require('body-parser');
const app = express();


const rootDir = process.cwd();
app.use(express.static(path.join(rootDir, "build")));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(rootDir, 'build/index.html'));
});

class QuestionData {
    constructor(id, image, question, answers, right) {
        this.id = id;
        this.image = image;
        this.question = question;
        this.answers = answers;
        if (right >= answers.length)
            throw new Error("There are not enough answers");
        this.right = right;
    }
}

const questions = [
    new QuestionData(0,'mouse.jpg', 'С какой скоростью кродется мышь?', ['Амурский', 'Малазийский', 'Индийский', 'Суматранский'], 1),
    new QuestionData(1, 'square.jpg', 'Где живет мышь?', ['В горной пещере', 'В бамбуковом лесу', 'В депрессии', 'В тропическом лесу'], 0),
    new QuestionData(2, 'tom.jpg', 'Какого цвета хвост у мышь?', ['В горной пещере', 'В бамбуковом лесу', 'В депрессии', 'В тропическом лесу'], 2),
    new QuestionData(3, 'estet.jpg', 'Какого размера кот?', ['В горной пещере', 'В бамбуковом лесу', 'В депрессии', 'В тропическом лесу'], 3)
];

app.get('/questions', function (req, res) {
    res.json(questions);
});
app.post('/validate', function (req, res) {
    let answers = req.body.answers;
    console.log(req.body);
    let points = 0;
    for (let e of answers){
        let id = e.id;
        let quest = questions[id];
        if (quest.answers[quest.right] === e.answer){
            points += 1;
        }
    }
    res.json({points});
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
