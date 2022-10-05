const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

//Mario Pula com o click de qualquer tecla.
const pulo = () =>{  //Dispara a função do pulo
    mario.classList.add('pulo'); // Inicia a animação pulo

    setTimeout(() =>{
        mario.classList.remove('pulo'); // Aciona novamente o pulo
    }, 500);
}


// Pipe para de se mover
const loop = setInterval(() =>{
    const musica = document.getElementById('musica');
    musica.play();

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', ''); 

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; 

        mario.src='./img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        alert("GAME OVER");
        musica.src='./sons/mario_death.wav';
        
        clearInterval(loop);        
    }

},10)

document.addEventListener('keydown', pulo) 
