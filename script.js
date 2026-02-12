// JavaScript
function respuesta(opcion) {
    const respuestaElement = document.getElementById('respuesta');
    
    if (opcion === 'sí') {
        // Respuesta positiva
        respuestaElement.innerHTML = "¡Yay! ¡Me alegra que haya dicho sí! La Amo Muchísimo, será increíble mi amor ❤️";
        
        // Crear confeti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF0000', '#FF1493', '#FFC0CB'] // Colores de confeti en tonos rosas
        });

        // Crear corazones en la primera pregunta
        crearCorazones('.pregunta');
    } else if (opcion === 'no') {
        // Respuesta negativa
        respuestaElement.innerHTML = "¡Oops! ¡Creo que debe pensarlo mejor! 😄";
        
        // Ocultar la pregunta original y mostrar la nueva
        document.getElementById('preguntaOriginal').style.display = 'none';
        document.getElementById('preguntaNueva').style.display = 'block';

        // Esperar a que la segunda pregunta se muestre y luego generar los corazones
        setTimeout(() => {
            crearCorazones('.pregunta');
        }, 500); // Tiempo para asegurar que la segunda pregunta se haya mostrado
    }
}

// Función para generar corazones como globos
function crearCorazones(selector) {
    const container = document.querySelector(selector); // Los corazones solo aparecerán en la sección de la pregunta
    
    for (let i = 0; i < 20; i++) {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.style.bottom = '-50px'; // Inicialmente están debajo de la pantalla
        corazon.style.left = `${Math.random() * container.offsetWidth}px`; // Posición aleatoria dentro de la sección
        container.appendChild(corazon);
        
        // Animación de los corazones
        corazon.style.animation = `corazonAnimacion ${Math.random() * 3 + 2}s ease-in-out forwards`;
    }
}

// Función para la respuesta en la segunda pregunta
function respuestaNueva(opcion) {
    const respuestaElement = document.getElementById('respuesta');
    
    if (opcion === 'sí') {
        // Respuesta de la segunda pregunta
        respuestaElement.innerHTML = "¡Ahora sí! ¡Me alegra que haya dicho sí! ❤️";
        
        // Crear confeti y corazones nuevamente
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF0000', '#FF1493', '#FFC0CB']
        });

        // Crear corazones en la segunda pregunta
        crearCorazones('.pregunta');
        
        // Mostrar el mensaje de amor
        mostrarMensajeDeAmor();
    }
}

// Función para mostrar el mensaje de amor
function mostrarMensajeDeAmor() {
    const mensajeElement = document.getElementById('mensajeDeAmor');
    mensajeElement.style.display = 'block'; // Muestra el mensaje de amor
}
