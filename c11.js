const fs = require('node:fs');
const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

try {
    const data = fs.readFileSync('data.json','utf8');    
    daftarPertanyaan = JSON.parse(data);
} catch (err) {
    console.log(err);
}

rl.setPrompt('Tebakan: ');
let currentQuestionIndex = 0;
let benar = true;

function askCurrentQuestion(){
    if(currentQuestionIndex < daftarPertanyaan.length){
        if(benar){
            console.log('Pertanyaan: ' + daftarPertanyaan[currentQuestionIndex].definition);
        }
        rl.prompt();
    }  else{
        console.log("Hore Anda Menang!")
        rl.close();
    }
}

askCurrentQuestion();
rl.on('line', function(line) {
    const currentQuestion = daftarPertanyaan[currentQuestionIndex];
    if(line.toLowerCase() == currentQuestion.term.toLowerCase()){
        console.log("Selamat Anda Benar!\n");
        benar= true;
        currentQuestionIndex++;
        askCurrentQuestion();
    } else{
        console.log("Wkwkwkwk Anda Kurang Beruntung!\n");
        benar = false;
        askCurrentQuestion();
    }
});
