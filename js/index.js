
const randomNumber = ()=> Math.floor(Math.random() * 6) + 1;
const imgSrc = (num) => {
    let n = document.querySelector('img').getAttribute('src');
    n = "images/dice"+num+".png";
    return n;
};
let randomNumber1 = randomNumber();
let randomNumber2 = randomNumber();

let imgSrc1 = imgSrc(randomNumber1);
let imgSrc2 = imgSrc(randomNumber2);
document.querySelectorAll('img')[0].setAttribute('src', imgSrc1);
document.querySelectorAll('img')[1].setAttribute('src', imgSrc2);

if(randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "Draw!!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 wins!🎖️";
} else{
    document.querySelector('h1').innerHTML = "Player 1 wins!🎖️";
}


