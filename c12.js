const fs = require('node:fs');
const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

const fileNames = process.argv.splice(2).toString();
try {
    data = fs.readFileSync(fileNames, 'utf-8')      
    daftarPertanyaan = JSON.parse(data);
} catch (err) {
    console.log("Tolong sertakan nama file sebagai inputan soalnya")
    console.log("misalnya 'node solution.js data.json'")
    process.exit()
}

console.log("Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini 'data.json'.")
console.log("Untuk bermain, jawablah dengan jawaban yang sesuai.")
console.log("Gunakan 'skip' untuk menangguhkan pertanyaannya dan di akhir pertanyaan akan ditanyakan lagi.\n")

rl.setPrompt('Jawaban: ');
let currentQuestionIndex = 0;
let wrongAnswers = 0;
let questionsCount = daftarPertanyaan.length - 1
let benar = true;
let questionsSkipped = [];

function askCurrentQuestion(){
    if(currentQuestionIndex < daftarPertanyaan.length){
        if(benar){
            console.log('Pertanyaan: ' + daftarPertanyaan[currentQuestionIndex].definition);
        }
        rl.prompt();
    } else if(questionsSkipped.length > 0){
        if((daftarPertanyaan.length) > questionsCount){
            wrongAnswers = 0;
        }
        daftarPertanyaan.push(...questionsSkipped);
        currentQuestionIndex = daftarPertanyaan.length - questionsSkipped.length;
        questionsSkipped = [];
        askCurrentQuestion();
    } else{
        console.log("Anda Berhasil!")
        rl.close();
    }
}

askCurrentQuestion();
rl.on('line', function(line) {
    const currentQuestion = daftarPertanyaan[currentQuestionIndex];
    if(line == currentQuestion.term){
        console.log("Anda Beruntung!\n");
        benar= true;
        currentQuestionIndex++;
        askCurrentQuestion();
    } else if(line == "skip"){
        benar = true;
        questionsSkipped.push(currentQuestion);
        currentQuestionIndex++;
        console.log("\n")
        askCurrentQuestion();
    } else{
        wrongAnswers++
        console.log(`Anda Kurang Beruntung! anda telah salah ${wrongAnswers} kali, silakan coba lagi\n`);
        benar = false;
        askCurrentQuestion();
    }
});
