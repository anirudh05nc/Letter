// Application State
let stage = 'initial'; // 'initial', 'envelope-hover', 'opening', 'letter-revealed', 'final'
let musicEnabled = false;

// Love symbols array
const loveSymbolsArray = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '🖤', '💋', '😘', '🥰', '😍', '🌹'];

// DOM Elements
const envelope = document.getElementById('envelope');
const envelopeFlap = document.getElementById('envelope-flap');
const waxSeal = document.getElementById('wax-seal');
const hoverInstruction = document.getElementById('hover-instruction');
const envelopeContainer = document.getElementById('envelope-container');
const letterContainer = document.getElementById('letter-container');
const letter = document.getElementById('letter');
const continueInstruction = document.getElementById('continue-instruction');
const finalProposal = document.getElementById('final-proposal');
const musicControl = document.getElementById('music-control');
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');

// Initialize the application
function init() {
    generateFloatingHearts();
    generateLoveSymbols();
    generateRoses();
    generateSparkles();
    generateCupidArrows();
    generateLoveLetters();
    
    // Show music control after delay
    setTimeout(() => {
        musicControl.classList.remove('hidden');
    }, 2000);
    
    // Add event listeners
    envelope.addEventListener('click', handleEnvelopeClick);
    envelope.addEventListener('mouseenter', handleEnvelopeHover);
    envelope.addEventListener('mouseleave', handleEnvelopeLeave);
    letter.addEventListener('click', handleLetterClick);
    musicBtn.addEventListener('click', toggleMusic);
}

// Generate floating hearts
function generateFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (8 + Math.random() * 5) + 's';
        container.appendChild(heart);
    }
}

// Generate love symbols
function generateLoveSymbols() {
    const container = document.getElementById('love-symbols');
    
    for (let i = 0; i < 25; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'love-symbol';
        symbol.innerHTML = loveSymbolsArray[Math.floor(Math.random() * loveSymbolsArray.length)];
        symbol.style.left = Math.random() * 100 + '%';
        symbol.style.top = Math.random() * 100 + '%';
        symbol.style.fontSize = (Math.random() * 15 + 12) + 'px';
        symbol.style.transform = `rotate(${Math.random() * 360}deg)`;
        symbol.style.opacity = Math.random() * 0.3 + 0.1;
        symbol.style.animationDelay = Math.random() * 10 + 's';
        symbol.style.animationDuration = `${12 + Math.random() * 3}s, ${15 + Math.random() * 5}s`;
        container.appendChild(symbol);
    }
}

// Generate roses
function generateRoses() {
    const container = document.getElementById('roses');
    
    for (let i = 0; i < 18; i++) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.innerHTML = '🌹';
        rose.style.left = Math.random() * 100 + '%';
        rose.style.top = Math.random() * 100 + '%';
        rose.style.fontSize = (Math.random() * 25 + 20) + 'px';
        rose.style.transform = `rotate(${Math.random() * 360}deg)`;
        rose.style.opacity = Math.random() * 0.25 + 0.05;
        rose.style.animationDelay = Math.random() * 8 + 's';
        rose.style.animationDuration = `${15 + Math.random() * 5}s, ${20 + Math.random() * 10}s`;
        container.appendChild(rose);
    }
}

// Generate sparkles
function generateSparkles() {
    const container = document.getElementById('sparkles');
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 10 + 8) + 'px';
        sparkle.style.animationDelay = Math.random() * 5 + 's';
        sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
        container.appendChild(sparkle);
    }
}

// Generate cupid arrows
function generateCupidArrows() {
    const container = document.getElementById('cupid-arrows');
    
    for (let i = 0; i < 8; i++) {
        const arrow = document.createElement('div');
        arrow.className = 'cupid-arrow';
        arrow.innerHTML = '💘';
        arrow.style.left = Math.random() * 100 + '%';
        arrow.style.top = Math.random() * 100 + '%';
        arrow.style.fontSize = (Math.random() * 12 + 10) + 'px';
        arrow.style.transform = `rotate(${Math.random() * 360}deg)`;
        arrow.style.opacity = Math.random() * 0.4 + 0.1;
        arrow.style.animationDelay = Math.random() * 8 + 's';
        arrow.style.animationDuration = (10 + Math.random() * 5) + 's';
        container.appendChild(arrow);
    }
}

// Generate love letters
function generateLoveLetters() {
    const container = document.getElementById('love-letters');
    
    for (let i = 0; i < 6; i++) {
        const letter = document.createElement('div');
        letter.className = 'love-letter';
        letter.innerHTML = '💌';
        letter.style.left = Math.random() * 100 + '%';
        letter.style.top = Math.random() * 100 + '%';
        letter.style.fontSize = (Math.random() * 15 + 12) + 'px';
        letter.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        letter.style.opacity = Math.random() * 0.3 + 0.1;
        letter.style.animationDelay = Math.random() * 6 + 's';
        letter.style.animationDuration = (12 + Math.random() * 3) + 's';
        container.appendChild(letter);
    }
}

// Handle envelope click
function handleEnvelopeClick() {
    if (stage === 'initial' || stage === 'envelope-hover') {
        stage = 'opening';
        envelope.classList.add('opening');
        envelopeFlap.classList.add('opening');
        waxSeal.classList.add('breaking');
        
        setTimeout(() => {
            stage = 'letter-revealed';
            envelopeContainer.classList.add('hidden');
            letterContainer.classList.remove('hidden');
        }, 1500);
    }
}

// Handle envelope hover
function handleEnvelopeHover() {
    if (stage === 'initial') {
        stage = 'envelope-hover';
        hoverInstruction.classList.remove('hidden');
    }
}

// Handle envelope leave
function handleEnvelopeLeave() {
    if (stage === 'envelope-hover') {
        stage = 'initial';
        hoverInstruction.classList.add('hidden');
    }
}

// Handle letter click
function handleLetterClick() {
    if (stage === 'letter-revealed') {
        stage = 'final';
        continueInstruction.classList.add('hidden');
        finalProposal.classList.remove('hidden');
        letterContainer.classList.add('final');
    }
}

// Toggle music
function toggleMusic() {
    musicEnabled = !musicEnabled;
    musicIcon.textContent = musicEnabled ? '🔊' : '🔇';
    
    // Here you would typically play/pause background music
    // For this demo, we're just changing the icon
    console.log('Music', musicEnabled ? 'enabled' : 'disabled');
}

// Add some interactive effects
function addInteractiveEffects() {
    // Add click effect to create hearts
    document.addEventListener('click', (e) => {
        if (e.target.closest('.envelope') || e.target.closest('.letter')) {
            createClickHeart(e.clientX, e.clientY);
        }
    });
}

// Create heart effect on click
function createClickHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartFloat 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Add heart float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    addInteractiveEffects();
});

// Add some responsive behavior
window.addEventListener('resize', () => {
    // Regenerate background elements on resize for better distribution
    if (window.innerWidth !== window.lastWidth) {
        window.lastWidth = window.innerWidth;
        
        // Clear existing elements
        document.getElementById('floating-hearts').innerHTML = '';
        document.getElementById('love-symbols').innerHTML = '';
        document.getElementById('roses').innerHTML = '';
        document.getElementById('sparkles').innerHTML = '';
        document.getElementById('cupid-arrows').innerHTML = '';
        document.getElementById('love-letters').innerHTML = '';
        
        // Regenerate with new positions
        generateFloatingHearts();
        generateLoveSymbols();
        generateRoses();
        generateSparkles();
        generateCupidArrows();
        generateLoveLetters();
    }
});

// Store initial width
window.lastWidth = window.innerWidth;