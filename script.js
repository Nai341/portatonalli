// LÓGICA DE VALIDACIÓN DEL CÓDIGO ENCRIPTADO (ARG / INTERFAZ RETRO)
const accessInput = document.getElementById('access-code');
const terminalContainer = document.getElementById('terminal-container');
const shopContainer = document.getElementById('shop-container');
const errorMsg = document.getElementById('error-msg');

// El acertijo de tu lore: El dios del Este es Xipe Tótec o Tezcatlipoca Rojo
const VALID_CODES = ['xipe totec', 'xipe tótec', 'tezcatlipoca rojo'];

accessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const userInput = accessInput.value.toLowerCase().trim();
        
        if (VALID_CODES.includes(userInput)) {
            // Animación de transición exitosa
            terminalContainer.classList.add('hidden');
            shopContainer.classList.remove('hidden');
        } else {
            // Muestra mensaje de error simulado
            errorMsg.classList.remove('hidden');
            accessInput.value = '';
            // Efecto de parpadeo de error
            errorMsg.style.animation = 'none';
            setTimeout(() => errorMsg.style.animation = '', 10);
        }
    }
});

// INTERACCIONES DE LA PASARELA DE PAGOS (BOFU / CONVERSIÓN)
const buyBtn = document.getElementById('buy-btn');
const paymentModal = document.getElementById('payment-modal');
const closeModal = document.getElementById('close-modal');
const paymentForm = document.getElementById('payment-form');
const successScreen = document.getElementById('success-screen');
const productCard = document.querySelector('.product-card');

buyBtn.addEventListener('click', () => {
    paymentModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    paymentModal.classList.add('hidden');
});

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Detiene la recarga de página real
    
    // Simulación técnica de cifrado y procesamiento seguro
    paymentModal.classList.add('hidden');
    productCard.classList.add('hidden');
    successScreen.classList.remove('hidden');
});
