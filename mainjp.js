const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は摂氏94度と暑かった。 しかし :insertx: は外を歩いていた。 彼は :inserty: についた時、 少しの間立ち止まって不気味に宙をじっと見つめていた。 そして :insertz:。 太郎はそれを見ても驚かなかった。 体重３００ポンドの :insertx: はそれほど珍しいものではなかった。';
let insertX = ['キティちゃん','ドラえもん','アンパンマン'];
let insertY = ['ショッピングモール','USJ','東京ドーム'];
let insertZ = ['自分の重さで急に転んでしまった','飛んでいってしまった','突然踊り始めた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round('体重' + 300*0.0714286) + 'kg';
    const temperature =  Math.round('華氏' + (94-32) * 5 / 9) + '度';
    newStory = newStory.replace('摂氏９４度',temperature);
    newStory = newStory.replace('体重300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
