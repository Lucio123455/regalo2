const noBtn = document.getElementById('no-btn');

function activarFuncion() {
    const nuevaPosicionTop = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
    const nuevaPosicionLeft = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    
    noBtn.style.top = nuevaPosicionTop + 'px';
    noBtn.style.left = nuevaPosicionLeft + 'px';
}

noBtn.addEventListener('mouseenter', activarFuncion);
