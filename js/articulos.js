/*articulos*/

const productos = [
    
    /*libreria*/
    {
        id: "#L01",
        titulo: "Lapicera azul",
        imagen: "../Recursos/libreria/lapiceraazulbic.png",
        precio: 200,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    {
        id: "#L02",
        titulo: "Lapicera negra",
        imagen: "../Recursos/libreria/lapiceranegrabic.png",
        precio: 200,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    {
        id: "#L03",
        titulo: "Lapicera roja",
        imagen: "../Recursos/libreria/lapicerarojabic.jpg",
        precio: 200,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    {
        id: "#L04",
        titulo: "Lapiz negro",
        imagen: "../Recursos/libreria/lapiznegrobic.png",
        precio: 100,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    {
        id: "#L05",
        titulo: "Lapiz corrector",
        imagen: "../Recursos/libreria/lapizcorrector.jpg",
        precio: 300,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    {
        id: "#L06",
        titulo: "Voligoma",
        imagen: "../Recursos/libreria/voligoma.jpg",
        precio: 120,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    {
        id: "#L07",
        titulo: "Caja de colores",
        imagen: "../Recursos/libreria/cajadecoloresbic.jpg",
        precio: 650,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    {
        id: "#L08",
        titulo: "Goma de borrar",
        imagen: "../Recursos/libreria/goma.jpg",
        precio: 50,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    {
        id: "#L09",
        titulo: "fibras de pintar",
        imagen: "../Recursos/libreria/fibras.jpg",
        precio: 740,
        categoria: {
            nombre: "Libreria",
            id: "libreria"
        },
    },
    /*jugueteria*/
    {
        id: "#J01",
        titulo: "Estanciero",
        imagen: "../Recursos/juegos/estanciero.jpg",
        precio: 5500,
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    },
    {
        id: "#J02",
        titulo: "Ajedez de madera",
        imagen: "../Recursos/juegos/ajedrez.jpg",
        precio: 8000,
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    },
    {
        id: "#J03",
        titulo: "Amigos de mierda",
        imagen: "../Recursos/juegos/amigos1.jpg",
        precio: "4000",
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    },
    {
        id: "#J04",
        titulo: "Life",
        imagen: "../Recursos/juegos/life.jpg",
        precio: 3000,
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    },
    {
        id: "#J05",
        titulo: "Bingo",
        imagen: "../Recursos/juegos/bingo.jpg",
        precio: 6000,
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    },
    {
        id: "#J06",
        titulo: "Clue",
        imagen: "../Recursos/juegos/clue.jpg",
        precio: 4000,
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    },
    {
        id: "#J07",
        titulo: "Hasta donde puedas",
        imagen: "../Recursos/juegos/hdp1.jpg",
        precio: 2000,
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    },
    {
        id: "#J08",
        titulo: "Jenga",
        imagen: "../Recursos/juegos/jenga.jpg",
        precio: 800,
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    },
    {
        id: "#J09",
        titulo: "Monopoly",
        imagen: "../Recursos/juegos/monopoly.jpg",
        precio: 6500,
        categoria: {
            nombre: "Juegueteria",
            id: "jugueteria"
        },
    }
    
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="producto-detalles">
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <h3 class="producto-nombre">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio} C/U</p>
                <button class="producto-agregar" id="${producto.id}">Agregar al carrito<i class="bi bi-plus-circle"></i></button>
            </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
      document.querySelector('.subir-section').classList.add('show');
    }
    else{
      document.querySelector('.subir-section').classList.remove('show');
    }
  }; 
  document.querySelector('.subir-section').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
/*fin articulos*/

