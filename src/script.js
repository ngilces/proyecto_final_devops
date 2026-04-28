const BASE = location.hostname.includes('github.io')
    ? 'data.json'
    : '/api';

// BOTÓN
document.getElementById('btn').addEventListener('click', () => {
    alert('✅ ¡El sitio funciona!');
});

// FUNCIÓN
async function cargar(endpoint, elementoId) {
    const lista = document.getElementById(elementoId);

    try {
        const res = await fetch(BASE);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        const datos = BASE === 'data.json'
            ? data[endpoint]
            : data;

        lista.innerHTML = datos.map(item =>
            `<li>${item.nombre}${
                item.precio !== undefined
                    ? `<span class="precio">$${item.precio}</span>`
                    : ''
            }</li>`
        ).join('');

    } catch (e) {
        lista.innerHTML = `<li class="error">Error: ${e.message}</li>`;
    }
}

// LLAMADAS
cargar('productos', 'productos');
cargar('categorias', 'categorias');