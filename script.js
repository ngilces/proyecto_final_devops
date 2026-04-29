// BOTÓN
document.getElementById('btn').addEventListener('click', () => {
    alert('✅ ¡El sitio funciona!');
});

console.log('🚀 Sitio cargado');


// FUNCIÓN PARA CARGAR DATOS
async function cargar(endpoint, elementoId) {
    const lista = document.getElementById(elementoId);

    try {
        const res = await fetch(`/api/${endpoint}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const datos = await res.json();

        lista.innerHTML = datos.map(item =>
            `<li>${item.nombre}${
                item.precio !== undefined
                    ? `<span class="precio">$${item.precio}</span>`
                    : ''
            }</li>`
        ).join('');

    } catch (e) {
        lista.innerHTML = `<li class="error">Error al conectar: ${e.message}</li>`;
    }
}


// LLAMADAS A LA API
cargar('productos', 'productos');
cargar('categorias', 'categorias');