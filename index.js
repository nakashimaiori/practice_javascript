// const question = "日本で最も面積の小さい都道府県はどこでしょう？";
// const answers = ["大阪", "香川", "東京", "沖縄"];
// const correct = "香川";


// document.getElementById("js-question").textContent = question;

// const $button = document.getElementByTagName("button");

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// let buttonIndex = 0;
// let buttonLength = $button.length;
// while(buttonIndex < buttonLength){
//   $button
// }



// document.getElementById("js-btn-1").textContent = answers[0].addEventListener("click", () =>{})


const quiz = [
  {
    question: '日本で最も面積の小さい都道府県はどこ？？',
    answers: [ '大阪', '香川', '東京', '沖縄'],
    correct: '香川'
  }, {
    question: '飛行機の中で食べるように作られた野菜があります。その野菜はどれでしょう？',
    answers: [ 'ズッキーニ', 'アボカド', 'ミニトマト', 'ヤングコーン'],
    correct: 'ミニトマト'
  }, {
    question: 'クジラが噴き出しているものは何？',
    answers: [ '海水', '空気', '食べかす', '体液'],
    correct: '空気'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
