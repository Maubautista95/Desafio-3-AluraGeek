// Generar contenido Star Wars

const starWarsContainer = document.querySelector('[data-star-container]');
const filtrarStar = 'Star Wars';

fetch('https://github.com/Maubautista95/Desafio-3-AluraGeek/blob/main/db.json')
  .then(response => response.json())
  .then(data => {
    let referenciasAgregadas = 0; // Variable para contar las referencias agregadas

    data.forEach(producto => {
      if (producto.categoria === filtrarStar && referenciasAgregadas < 6) {
        const starWarsBox = document.createElement('div');
        starWarsBox.className = "productos-index-box";

        const starWarsImg = document.createElement('img');
        starWarsImg.className = "productos-index-img-producto";
        starWarsImg.src = producto.urlImagen;
        starWarsImg.alt = '';

        const starWarsTitle = document.createElement('h3');
        starWarsTitle.className = "productos-index-box-titulo";
        starWarsTitle.textContent = producto.nombre;

        const starWarsPrice = document.createElement('p');
        starWarsPrice.className = "productos-index-precio";
        starWarsPrice.textContent = `$${producto.precio}`;

        const starWarsLink = document.createElement('a');
        starWarsLink.className = "productos-index-link";
        starWarsLink.textContent = "Ver producto";
        starWarsLink.href = '#';

        starWarsBox.appendChild(starWarsImg);
        starWarsBox.appendChild(starWarsTitle);
        starWarsBox.appendChild(starWarsPrice);
        starWarsBox.appendChild(starWarsLink);

        starWarsContainer.appendChild(starWarsBox);

        referenciasAgregadas++; // Incrementar el contador de referencias agregadas
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));



//Seleccionar los divs de Consolas 
const consolasContainer =  document.querySelector('[data-consolas-container]');
const filtrarConsolas = "Consolas"

fetch('https://github.com/Maubautista95/Desafio-3-AluraGeek/blob/main/db.json')
  .then(response => response.json())
  .then(data => {
    let referenciasAgregadas = 0; // Variable para contar las referencias agregadas

    data.forEach(producto => {
      if (producto.categoria === filtrarConsolas && referenciasAgregadas < 6) {
        const consolasBox = document.createElement('div');
        consolasBox.className = "productos-index-box";

        const consolasImg = document.createElement('img');
        consolasImg.className = "productos-index-img-producto";
        consolasImg.src = producto.urlImagen;
        consolasImg.alt = '';

        const consolasTitle = document.createElement('h3');
        consolasTitle.className = "productos-index-box-titulo";
        consolasTitle.textContent = producto.nombre;

        const consolasPrice = document.createElement('p');
        consolasPrice.className = "productos-index-precio";
        consolasPrice.textContent = `$${producto.precio}`;

        const consolasLink = document.createElement('a');
        consolasLink.className = "productos-index-link";
        consolasLink.textContent = "Ver producto";
        consolasLink.href = '#';

        consolasBox.appendChild(consolasImg);
        consolasBox.appendChild(consolasTitle);
        consolasBox.appendChild(consolasPrice);
        consolasBox.appendChild(consolasLink);

        consolasContainer.appendChild(consolasBox);

        referenciasAgregadas++; // Incrementar el contador de referencias agregadas
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));

//Seleccionar los divs de Diversos

const diversosContainer =  document.querySelector('[data-diversos-container]');

const filtrarDiversos = "Diversos"

fetch('https://github.com/Maubautista95/Desafio-3-AluraGeek/blob/main/db.json')
  .then(response => response.json())
  .then(data3 => {
    let referenciasAgregadas = 0; // Variable para contar las referencias agregadas

    data3.forEach(producto => {
      if (producto.categoria === filtrarDiversos && referenciasAgregadas < 6) {
        const diversosBox = document.createElement('div');
        diversosBox.className = "productos-index-box";

        const diversosImg = document.createElement('img');
        diversosImg.className = "productos-index-img-producto";
        diversosImg.src = producto.urlImagen;
        diversosImg.alt = '';

        const diversosTitle = document.createElement('h3');
        diversosTitle.className = "productos-index-box-titulo";
        diversosTitle.textContent = producto.nombre;

        const diversosPrice = document.createElement('p');
        diversosPrice.className = "productos-index-precio";
        diversosPrice.textContent = `$${producto.precio}`;

        const diversosLink = document.createElement('a');
        diversosLink.className = "productos-index-link";
        diversosLink.textContent = "Ver producto";
        diversosLink.href = '#';

        diversosBox.appendChild(diversosImg);
        diversosBox.appendChild(diversosTitle);
        diversosBox.appendChild(diversosPrice);
        diversosBox.appendChild(diversosLink);

        diversosContainer.appendChild(diversosBox);

        referenciasAgregadas++; // Incrementar el contador de referencias agregadas
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));


