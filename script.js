// Animación de frases al cargar
document.addEventListener('DOMContentLoaded', () => {
    // Fade-in progresivo para todas las secciones
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 300 * index);
    });
    
    // Animación de frases románticas
    const phrases = document.querySelectorAll('.phrase');
    phrases.forEach((phrase, index) => {
        setTimeout(() => {
            phrase.classList.add('visible');
        }, 500 + (index * 300));
    });
    
    // Iniciar countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Iniciar corazones flotantes
    startFloatingHearts();
    
    // Mensaje en consola
    console.log('%c❤️❤️❤️ TE AMO MI VIDA ❤️❤️❤️', 'font-size: 40px; color: #ff6b6b; font-weight: bold; text-shadow: 0 0 10px rgba(255, 107, 107, 0.7);');
    console.log('%cEsta web fue creada con todo mi amor para ti', 'font-size: 20px; color: #333; font-weight: bold;');
    console.log('%cDesde el 19 de Diciembre de 2025... cada día a tu lado es un regalo ❤️', 'font-size: 16px; color: #ff6b6b;');
    console.log('%c¡Feliz Día del Amor y la Amistad! 💕', 'font-size: 20px; color: #ee5a6f; font-weight: bold;');
    console.log('%c🎶 Presiona play en Spotify para escuchar "Piel Canela" mientras lees estas palabras', 'font-size: 16px; color: #1DB954; font-weight: bold;');
});

// Countdown timer - Desde el 19 de diciembre de 2025
function updateCountdown() {
    const startDate = new Date('2025-12-19');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Mostrar carta de amor
function showLetter() {
    const letterContent = document.getElementById('letterContent');
    letterContent.style.display = letterContent.style.display === 'block' ? 'none' : 'block';
    
    if (letterContent.style.display === 'block') {
        letterContent.style.animation = 'fadeIn 0.5s ease';
        // Efecto de corazón al abrir carta
        createHeartExplosion();
    }
}

// Animación de corazones flotantes
function createFloatingHeart() {
    const heart = document.createElement('i');
    heart.className = 'fas fa-heart';
    heart.style.position = 'fixed';
    heart.style.color = '#ff6b6b';
    heart.style.fontSize = '20px';
    heart.style.zIndex = '100';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    document.body.appendChild(heart);
    
    let pos = 0;
    const interval = setInterval(() => {
        pos += 2;
        heart.style.top = (y - pos) + 'px';
        heart.style.opacity = 0.7 - (pos / 500);
        heart.style.transform = `scale(${1 - pos/1000})`;
        
        if (pos > 500) {
            clearInterval(interval);
            heart.remove();
        }
    }, 20);
}

// Iniciar corazones flotantes
function startFloatingHearts() {
    setInterval(createFloatingHeart, 2000);
}

// Efecto de explosión de corazones al abrir carta
function createHeartExplosion() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('i');
            heart.className = 'fas fa-heart';
            heart.style.position = 'fixed';
            heart.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
            heart.style.fontSize = `${15 + Math.random() * 15}px`;
            heart.style.zIndex = '1000';
            heart.style.opacity = '0.9';
            heart.style.pointerEvents = 'none';
            
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 150;
            
            heart.style.left = `${centerX}px`;
            heart.style.top = `${centerY}px`;
            
            document.body.appendChild(heart);
            
            // Animar explosión
            let pos = 0;
            const interval = setInterval(() => {
                pos += 5;
                const x = centerX + Math.cos(angle) * pos;
                const y = centerY + Math.sin(angle) * pos;
                heart.style.left = `${x}px`;
                heart.style.top = `${y}px`;
                heart.style.opacity = `${0.9 - pos/300}`;
                heart.style.transform = `scale(${1 - pos/300})`;
                
                if (pos > distance) {
                    clearInterval(interval);
                    heart.remove();
                }
            }, 20);
        }, i * 50);
    }
}

// Efecto typing para el título (opcional)
function typeWriterEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    const typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

// Abrir Spotify en app móvil
document.querySelector('.spotify-btn').addEventListener('click', function(e) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        e.preventDefault();
        window.location.href = 'spotify:track:1heE6XiaOzRtsku8YrfCjN';
        setTimeout(() => {
            window.location.href = 'https://open.spotify.com/track/1heE6XiaOzRtsku8YrfCjN';
        }, 1000);
    }
});
