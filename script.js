// Pantalla de carga
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 2000);
});

// Countdown timer
function updateCountdown() {
    const startDate = new Date('2024-01-01'); // Cambia esta fecha por cuando empezaron
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
    }
}

// Efectos hover en razones
const reasons = document.querySelectorAll('.reasons li');
reasons.forEach((reason, index) => {
    reason.addEventListener('mouseenter', () => {
        reason.style.backgroundColor = '#ff6b6b';
        reason.style.color = 'white';
    });
    
    reason.addEventListener('mouseleave', () => {
        reason.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        reason.style.color = 'inherit';
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
        
        if (pos > 500) {
            clearInterval(interval);
            heart.remove();
        }
    }, 20);
}

// Crear corazones flotantes cada 2 segundos
setInterval(createFloatingHeart, 2000);

// Efecto de typing en el mensaje
function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    const typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

// Mensaje secreto (opcional)
console.log('%c❤️ Te amo mi vida ❤️', 'font-size: 30px; color: #ff6b6b; font-weight: bold;');
console.log('%cEsta web fue creada con todo mi amor para ti', 'font-size: 16px; color: #333;');
