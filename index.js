const question = "日本で最も面積の小さい都道府県はどこでしょう？";
const answers = ["大阪", "香川", "東京", "沖縄"];
const correct = "香川";


document.getElementById("js-question").textContent = question;

const $button = document.getElementByTagName("button");

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
  $button
}



document.getElementById("js-btn-1").textContent = answers[0].addEventListener("click", () =>{})
