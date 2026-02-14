// Pantalla de carga
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 2000);
});

// Música de fondo
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        isPlaying = true;
        document.getElementById('musicIcon').className = 'fas fa-volume-up';
        showNotification('🎵 Música activada');
    } else {
        backgroundMusic.pause();
        isPlaying = false;
        document.getElementById('musicIcon').className = 'fas fa-volume-mute';
        showNotification('🔇 Música desactivada');
    }
}

// Countdown timer - Desde el 19 de diciembre de 2025
function updateCountdown() {
    const startDate = new Date('2025-12-19'); // Fecha en que empezaron a ser pareja
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

// Actualizar countdown cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// Mostrar carta de amor
function showLetter() {
    const letterContent = document.getElementById('letterContent');
    letterContent.style.display = letterContent.style.display === 'block' ? 'none' : 'block';
    
    if (letterContent.style.display === 'block') {
        letterContent.style.animation = 'fadeIn 0.5s ease';
        showNotification('💌 Carta de amor abierta');
    }
}

// Efectos hover en razones
const reasons = document.querySelectorAll('.reasons li');
reasons.forEach((reason, index) => {
    reason.addEventListener('mouseenter', () => {
        reason.style.backgroundColor = '#ff6b6b';
        reason.style.color = 'white';
        reason.style.transform = 'translateX(15px)';
    });
    
    reason.addEventListener('mouseleave', () => {
        reason.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        reason.style.color = 'inherit';
        reason.style.transform = 'translateX(0)';
    });
});

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

// Crear corazones flotantes cada 2 segundos
setInterval(createFloatingHeart, 2000);

// Notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a6f)';
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '50px';
    notification.style.zIndex = '10000';
    notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    notification.style.animation = 'notification 3s ease forwards';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

@keyframes notification {
    0% { transform: translateX(200px); opacity: 0; }
    20% { transform: translateX(0); opacity: 1; }
    80% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(200px); opacity: 0; }
}

// Efecto de typing en el título
function typeWriterEffect() {
    const title = document.querySelector('.card-header h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// Iniciar efecto de typing después de cargar
setTimeout(typeWriterEffect, 2500);

// Mensaje secreto en consola
console.log('%c❤️❤️❤️ TE AMO MI VIDA ❤️❤️❤️', 'font-size: 40px; color: #ff6b6b; font-weight: bold; text-shadow: 0 0 10px rgba(255, 107, 107, 0.7);');
console.log('%cEsta web fue creada con todo mi amor para ti', 'font-size: 20px; color: #333; font-weight: bold;');
console.log('%cDesde el 19 de Diciembre de 2025... cada día a tu lado es un regalo ❤️', 'font-size: 16px; color: #ff6b6b;');
console.log('%c¡Feliz Día del Amor y la Amistad! 💕', 'font-size: 20px; color: #ee5a6f; font-weight: bold;');

// Activar música automáticamente si el usuario interactúa
document.addEventListener('click', () => {
    if (!isPlaying) {
        backgroundMusic.volume = 0.3; // Volumen al 30%
    }
}, { once: true });

// Efecto de brillo en los botones
const buttons = document.querySelectorAll('.btn, .music-btn, .music-control');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.8)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = '';
    });
});
