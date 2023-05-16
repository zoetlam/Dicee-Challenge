function play(){
    const randomNumber = ()=> Math.floor(Math.random() * 6) + 1;
    const imgSrc = (num) => {
        let n = "images/dice"+num+".png";
        return n;
    };
    let randomNumber1 = randomNumber();
    let randomNumber2 = randomNumber();

    document.querySelectorAll('img')[0].setAttribute('src', imgSrc(randomNumber1));
    document.querySelectorAll('img')[1].setAttribute('src', imgSrc(randomNumber2));

    if(randomNumber1 === randomNumber2){
        document.querySelector('h1').innerHTML = "Draw!!";
    }else if(randomNumber1 < randomNumber2){
        document.querySelector('h1').innerHTML = "Player 2 wins!🎖️";
    } else{
        document.querySelector('h1').innerHTML = "Player 1 wins!🎖️";
    }
}
document.querySelector('button').addEventListener('click', play)