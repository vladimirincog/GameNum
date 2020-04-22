let randomNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

const elementRound = document.querySelectorAll('.round');                 // 
const userNumForm = document.querySelector('.userNumForm');               //
const btnNewGame = document.querySelector('.btn-new-game');               //
const btnCleanForm = document.querySelector('.btn-clean-form');           //  
const btnEnter = document.querySelector('.btn-enter');                    //
const msgWin = document.querySelector(".msg-win");                        //
const msgOver = document.querySelector(".msg-over");                      //
const msgMore = document.querySelector(".msg-more");                      //
const msgLess = document.querySelector(".msg-less");                      //
const msgNumberEnter = document.querySelector(".msg-number-enter");       //
const fail = document.querySelector(".fail");                             // Инициализации
const numberBtnArr = [document.querySelector('.btn-0'),                   //
document.querySelector('.btn-1'),                                         //
document.querySelector('.btn-2'),                                         //
document.querySelector('.btn-3'),                                         //
document.querySelector('.btn-4'),                                         //
document.querySelector('.btn-5'),                                         //
document.querySelector('.btn-6'),                                         //
document.querySelector('.btn-7'),                                         //
document.querySelector('.btn-8'),                                         //
document.querySelector('.btn-9')];                                        //

numberBtnArr[0].addEventListener('click', pressBtn0);                     //
numberBtnArr[1].addEventListener('click', pressBtn1);                     //
numberBtnArr[2].addEventListener('click', pressBtn2);                     //
numberBtnArr[3].addEventListener('click', pressBtn3);                     //
numberBtnArr[4].addEventListener('click', pressBtn4);                     // 
numberBtnArr[5].addEventListener('click', pressBtn5);                     // 
numberBtnArr[6].addEventListener('click', pressBtn6);                     // Отслеживание события 'click'
numberBtnArr[7].addEventListener('click', pressBtn7);                     // на всех кнопках
numberBtnArr[8].addEventListener('click', pressBtn8);                     //
numberBtnArr[9].addEventListener('click', pressBtn9);                     //
btnNewGame.addEventListener('click', newGame);                            //
btnCleanForm.addEventListener('click', cleanForm);                        //
btnEnter.addEventListener('click', enterForm);                            //

function pressBtn0() { userNumForm.value = userNumForm.value + '0'; }     //
function pressBtn1() { userNumForm.value = userNumForm.value + '1'; }     // 
function pressBtn2() { userNumForm.value = userNumForm.value + '2'; }     // 
function pressBtn3() { userNumForm.value = userNumForm.value + '3'; }     // 
function pressBtn4() { userNumForm.value = userNumForm.value + '4'; }     // Обработчики событий
function pressBtn5() { userNumForm.value = userNumForm.value + '5'; }     // для кнопок цифр
function pressBtn6() { userNumForm.value = userNumForm.value + '6'; }     //
function pressBtn7() { userNumForm.value = userNumForm.value + '7'; }     //
function pressBtn8() { userNumForm.value = userNumForm.value + '8'; }     //
function pressBtn9() { userNumForm.value = userNumForm.value + '9'; }     //

function cleanForm() { userNumForm.value = ''; }
function livesRound(i) {
    for (let j = elementRound.length - 1; j >= i; j--) {
        elementRound[j].style.background = 'white'
    }
}

function enterForm() {
    msgWin.style.display = 'none';
    msgLess.style.display = 'none';
    msgMore.style.display = 'none';
    msgOver.style.display = 'none';
    msgNumberEnter.style.display = 'none';

    if (userNumForm.value !== '') {
        fail.textContent += userNumForm.value + ' ';

        if (Number(userNumForm.value) === randomNumber && lives !== 0) {
            victory();
        }
        else if (Number(userNumForm.value) < randomNumber) {
            lives--;
            livesRound(lives);
            if (lives >= 1) {
                msgLess.style.display = 'block';

            }
            else {
                gameOver();
            }

        }
        else if (Number(userNumForm.value) > randomNumber) {
            lives--;
            livesRound(lives);
            if (lives >= 1) {
                msgMore.style.display = 'block';
            }
            else {
                gameOver();
            }

        }
        cleanForm();
    }
    else {
        msgNumberEnter.style.display = 'block';
    }
}

function gameOver() {
    msgOver.style.display = 'block';
    btnEnter.disabled = true;
    btnCleanForm.disabled = true;
    userNumForm.disabled = true;
    for (let i = 0; i <= 9; i++) {
        numberBtnArr[i].disabled = true;
    }
}

function victory(){
    msgWin.style.display = 'block';
    btnEnter.disabled = true;
    btnCleanForm.disabled = true;
    userNumForm.disabled = true;
    for (let i = 0; i <= 9; i++) {
        numberBtnArr[i].disabled = true;
    }
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    userNumForm.value = '';
    fail.textContent = '';
    lives = 10;
    msgOver.style.display = 'none';
    msgWin.style.display = 'none';
    msgLess.style.display = 'none';
    msgMore.style.display = 'none';
    msgNumberEnter.style.display = 'none';
    btnEnter.disabled = false;
    userNumForm.disabled = false;
    btnCleanForm.disabled = false;
    for (let i = 0; i <= 9; i++) {
        numberBtnArr[i].disabled = false;
    }
    for (let j = elementRound.length - 1; j >= 0; j--) {
        elementRound[j].style.background = 'black'
    }

}


document.onkeyup = function (e) {
    
    e = e || window.event;
    
    if (e.keyCode === 13) {
    
     enterForm();
    
    }
    
     return false;
    
    }
    