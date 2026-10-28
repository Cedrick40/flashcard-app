const flashcards = [
  {question:"What does HTML stand for?",answer:"HyperText Markup Language. It provides the structure and meaning of content on a web page."},
  {question:"What is CSS used for?",answer:"Cascading Style Sheets control how a page looks, including colors, spacing, layout, and typography."},
  {question:"What is JavaScript?",answer:"A programming language that makes web pages interactive, dynamic, and responsive to user actions."},
  {question:"What does responsive design mean?",answer:"Designing a website so its layout and content adapt to different screen sizes and devices."},
  {question:"What is the DOM?",answer:"The Document Object Model represents a web page as a tree of objects that JavaScript can read and change."},
  {question:"What is a semantic HTML element?",answer:"An element whose name describes its purpose, such as header, nav, main, or footer."},
  {question:"What does a CSS class do?",answer:"A class gives one or more HTML elements a reusable name that CSS or JavaScript can target."},
  {question:"What is an event listener?",answer:"JavaScript code that waits for an event, such as a click, and runs a function when it happens."},
  {question:"What is the difference between margin and padding?",answer:"Margin is space outside an element's border. Padding is space between the content and its border."},
  {question:"Why should images have alt text?",answer:"Alt text describes an image for screen-reader users and provides context if the image cannot load."}
];
const flashcard=document.getElementById('flashcard');
const questionText=document.getElementById('questionText');
const answerText=document.getElementById('answerText');
const cardNumber=document.getElementById('cardNumber');
const prevBtn=document.getElementById('prevBtn');
const nextBtn=document.getElementById('nextBtn');
const flipBtn=document.getElementById('flipBtn');
const resetBtn=document.getElementById('resetBtn');
const progressPercent=document.getElementById('progressPercent');
const progressFill=document.getElementById('progressFill');
const progressBar=document.getElementById('progressBar');
const currentProgress=document.getElementById('currentProgress');
const cardsRemaining=document.getElementById('cardsRemaining');
let currentIndex=0;
let isFlipped=false;
function setFlipped(flipped){
  isFlipped=flipped;
  flashcard.classList.toggle('is-flipped',isFlipped);
  flashcard.setAttribute('aria-pressed',String(isFlipped));
  flashcard.setAttribute('aria-label',isFlipped?'Answer revealed. Flip to see question':'Flip flashcard to reveal answer');
  flipBtn.innerHTML=isFlipped?'↻ &nbsp; Show question':'↻ &nbsp; Reveal answer';
}
function renderCard(){
  const card=flashcards[currentIndex];
  questionText.textContent=card.question;
  answerText.textContent=card.answer;
  cardNumber.textContent=`CARD ${String(currentIndex+1).padStart(2,'0')} / ${flashcards.length}`;
  const percentage=Math.round(((currentIndex+1)/flashcards.length)*100);
  progressPercent.textContent=percentage;
  progressFill.style.width=`${percentage}%`;
  progressBar.setAttribute('aria-valuenow',String(percentage));
  currentProgress.textContent=currentIndex+1;
  cardsRemaining.textContent=flashcards.length-currentIndex-1;
  prevBtn.disabled=currentIndex===0;
  nextBtn.disabled=currentIndex===flashcards.length-1;
  nextBtn.textContent=currentIndex===flashcards.length-1?'Deck complete ✓':'Next  →';
  setFlipped(false);
}
function moveCard(direction){const nextIndex=currentIndex+direction;if(nextIndex<0||nextIndex>=flashcards.length)return;currentIndex=nextIndex;renderCard();}
flashcard.addEventListener('click',()=>setFlipped(!isFlipped));
flipBtn.addEventListener('click',()=>setFlipped(!isFlipped));
prevBtn.addEventListener('click',()=>moveCard(-1));
nextBtn.addEventListener('click',()=>{if(currentIndex===flashcards.length-1){currentIndex=0;renderCard();}else moveCard(1);});
resetBtn.addEventListener('click',()=>{currentIndex=0;renderCard();});
document.addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft')moveCard(-1);
  if(event.key==='ArrowRight'){if(currentIndex===flashcards.length-1){currentIndex=0;renderCard();}else moveCard(1);}
  if(event.key===' '&&!['BUTTON','INPUT','TEXTAREA'].includes(document.activeElement.tagName)){event.preventDefault();setFlipped(!isFlipped);}
});
renderCard();
