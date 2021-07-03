(function () {
    // Selectores
    const 
        btnBuscar = document.querySelector('#btn-buscar'),
        btnsUseMeme = document.querySelectorAll('.card-body button');

    // Event Listeners
    btnBuscar.addEventListener('click', buscarImagen);
    btnsUseMeme.forEach(btn => btn.addEventListener('click', usarMeme))
    // funciones
    function buscarImagen(e) {
        e.preventDefault();

        const 
            inputBusqueda = document.querySelector('#input-busqueda'),
            busqueda = inputBusqueda.value,
            titulos = document.querySelectorAll('.card h5'),
            searchResults = document.querySelector('#search-results');

        let encontrado = false;
        let card = new Array();

        for (let i = 0; i < titulos.length; i++) {
            
            // console.log(titulos[i].textContent)
            if(titulos[i].textContent.includes(busqueda)) {
                encontrado = true;
                card.push(titulos[i].parentElement.parentElement);
            }
        }
            
        
        if (encontrado) {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.style.display = 'none');

            
            card.forEach(c => c.style.display = 'flex')
            


            const mensaje = `
            <strong>Search results: </strong>'${busqueda}'
            `;

            searchResults.innerHTML = mensaje;
        } else {
            const mensaje = `
            <strong>Search results: </strong>there is no similar results
            `;
            searchResults.innerHTML = mensaje;
        }
    }

    function usarMeme(e) {
        e.preventDefault();
        window.location.href = 'index.html'
    }
})();