const productos = [
    {imagen: "https://ansaldo.cl/cdn/shop/files/17645_66f20db0-ba69-416f-af76-dfbe9486ea3c.jpg?v=1745861121", codigo:"JM001" , categoria: "Juegos de Mesa",nombre: "Catan", descripcion: "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.", precio: 29990},

    {imagen: "https://media.falabella.com/falabellaCL/138442746_01/w=800,h=800,fit=pad",codigo:"JM002" , categoria: "Juegos de Mesa",nombre: "Carcassonne", descripcion: "Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.", precio: 24990},

    {imagen: "https://i.pinimg.com/736x/71/e7/11/71e71108fb630abb490d42b7e3e8bd7b.jpg",codigo:"AC001" , categoria: "Accesorios",nombre: "Controlador Inalámbrico Xbox Series X", descripcion: "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.", precio: 59990},

    {imagen: "https://i.pinimg.com/736x/e8/05/ca/e805ca60ab63a0791ca32f8a2f504dc1.jpg",codigo:"AC002" , categoria: "Accesorios",nombre: "Auriculares Gamer HyperX Cloud II", descripcion: "Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.", precio: 79990},
    
    {imagen: "https://i.pinimg.com/736x/66/88/14/6688146607df5f6f98aa3bdb80b2af44.jpg",codigo:"CG001" , categoria: "Computadores Gamers",nombre: "PC Gamer ASUS ROG Strix", descripcion: "Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.", precio: 1299990},
    
    {imagen: "https://i.pinimg.com/736x/cf/ee/8b/cfee8bbab9dc4c479271d838e7d14553.jpg",codigo:"CO001" , categoria: "Consolas",nombre: "PlayStation 5", descripcion: "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.", precio: 549990},
    
    {imagen: "https://i.pinimg.com/736x/6f/c0/f7/6fc0f79d7cfdffb3660b5355c178b86c.jpg",codigo:"SG001" , categoria: "Sillas Gamers",nombre: "Silla Gamer Secretlab Titan", descripcion: "Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.", precio: 349990},
    
    {imagen: "https://i.pinimg.com/736x/a5/3b/57/a53b574b5e3774644e1a452818ff72ae.jpg",codigo:"MS001" , categoria: "Mouse",nombre: "Mouse Gamer Logitech G502 HERO", descripcion: "Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.", precio: 49990},

    {imagen: "https://i.pinimg.com/1200x/49/7c/88/497c88b2ac6d8f4f6db657050a310270.jpg",codigo:"MP001" , categoria: "Mousepad",nombre: "Mousepad Razer Goliathus Extended Chroma", descripcion: "Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.", precio: 29990},

    {imagen: "https://i.pinimg.com/1200x/d6/c5/d5/d6c5d54b18c807e9293c4878babcd4b5.jpg",codigo:"PP001" , categoria: "Poleras Personalizadas",nombre: "Polera Gamer Personalizada 'Level-Up'", descripcion: "Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.", precio: 14990}
];


function mostrarProductos(lista) {
    const contenedor = document.getElementById('product-list');
    contenedor.innerHTML = '';
    if (lista.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }
    lista.forEach(prod => {
        contenedor.innerHTML += `
            <div class="product-card">
            <img src="${prod.imagen}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <span class="price">${prod.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</span>
            </div>
        `;
    });
}

mostrarProductos(productos);


document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultados = productos.filter(prod =>
        prod.nombre.toLowerCase().includes(query) ||
        prod.descripcion.toLowerCase().includes(query)
    );
    mostrarProductos(resultados);
});


document.getElementById('login-btn').addEventListener('click', () => {
    const usuario = document.getElementById('username').value;
    const clave = document.getElementById('password').value;
    const mensaje = document.getElementById('login-message');
    if (usuario === "admin" && clave === "1234") {
        mensaje.textContent = "¡Login exitoso!";
        mensaje.style.color = "limegreen";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.style.color = "orange";
    }
});