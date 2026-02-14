// Función para iniciar la experiencia al presionar el corazón
function startExperience() {
    const startScreen = document.getElementById('startScreen');
    const mainCard = document.getElementById('mainCard');
    
    // Animación de desaparición de pantalla de inicio
    startScreen.style.opacity = '0';
    startScreen.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        startScreen.style.display = 'none';
        mainCard.style.display = 'block';
        
        // Pequeño delay para que la animación sea suave
        setTimeout(() => {
            // Iniciar efectos después de mostrar el contenido
            typeWriterEffect();
            startFloatingHearts();
            
            // Mostrar notificación
            showNotification('❤️ ¡Bienvenida! Presiona play en Spotify para escuchar "Piel Canela"');
        }, 100);
    }, 800);
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

// Iniciar corazones flotantes
function startFloatingHearts() {
    setInterval(createFloatingHeart, 2000);
}

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

// Mensaje secreto en consola
console.log('%c❤️❤️❤️ TE AMO MI VIDA ❤️❤️❤️', 'font-size: 40px; color: #ff6b6b; font-weight: bold; text-shadow: 0 0 10px rgba(255, 107, 107, 0.7);');
console.log('%cEsta web fue creada con todo mi amor para ti', 'font-size: 20px; color: #333; font-weight: bold;');
console.log('%cDesde el 19 de Diciembre de 2025... cada día a tu lado es un regalo ❤️', 'font-size: 16px; color: #ff6b6b;');
console.log('%c¡Feliz Día del Amor y la Amistad! 💕', 'font-size: 20px; color: #ee5a6f; font-weight: bold;');
console.log('%c🎶 Presiona el corazón grande para comenzar y luego play en Spotify para escuchar "Piel Canela"', 'font-size: 16px; color: #1DB954; font-weight: bold;');

// Abrir Spotify en app móvil si es posible
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
