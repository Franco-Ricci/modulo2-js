localStorage.clear();
//Agregamos libros en la seccion recomendados
let librosRec = [
  {
    id: 1,
    nombre: "Los guardianes",
    autor: "John Grisham",
    descripcion:"Un hombre inocente fue condenado por asesinato hace veintidós años. Su abogado no parará hasta verle libre",
    precio: 1300,
    imagen: "images/rec-2.jpg",
  },
  {
    id: 2,
    nombre: "Las tinieblas y el alba",
    autor: "Ken Follet",
    descripcion :"En Las tinieblas y el alba, Ken Follett embarca al lector en un épico viaje que termina en Los pilares de la Tierra comienza.",
    precio: 3795,
    imagen: "images/rec-1.png",
  },
  {
    id: 3,
    nombre: "Un lugar llamado antaño",
    autor: "Olga Tokarczuk",
    descripcion: "Una novela mágica: la historia de un pueblo y sus excéntricos habitantes, que es al mismo tiempo la historia de un siglo y un país",
    precio: 1299,
    imagen: "images/rec-3.png",
  },
  {
    id: 4,
    nombre: "La tia cosima",
    autor: "Florencia Bonelli",
    descripcion:"Cósima; un nombre para recordar. Una historia de cómo el amor vence al odio. La nueva novela de Florencia Bonelli; la escritora argentina más leída y admirada de América Latina ",
    precio: 949,
    imagen: "images/rec-4.png",
  },
];

//Agregamos libros en la seccion Novedades

let librosNov = [
  {
    id: 5,
    nombre: "El Hombre Ilustrado",
    autor: "Ray Bradbury",
    descripcion:"El narrador anónimo conoce a El Hombre Ilustrado, un curioso personaje con el cuerpo completamente cubierto de tatuajes. Sin embargo, lo más remarcable e inquietante es que las ilustraciones están mágicamente vivas.", 
    precio: 2500,
    imagen: "images/nov-1.jpg",
  },
  {
    id: 6,
    nombre: "El enigma de la habitación 622",
    autor: "Joël Dicker",
    descripcion :"Una noche de diciembre, un cadáver yace en el suelo de la habitación 622 del Palace de Verbier, un hotel de lujo en los Alpes suizos. La investigación policial no llegará nunca a término y el paso del tiempo hará que muchos olviden lo sucedido.",
    precio: 2000,
    imagen: "images/nov-2.png",
  },
  {
    id: 7,
    nombre: "1984",
    autor: "George Orwell",
    descripcion: "1984 es una de las novelas más inquietantes y atractivas del siglo XX. En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos.",
    precio: 699,
    imagen: "images/nov-3.png",
  },
  {
    id: 8,
    nombre: "La Bailarina de Auschwitz",
    autor: "Eger Edhit Eva",
    descripcion:"Una emocionante historia de superación sobre la capacidad del ser humano para sanar y vencer la adversidad. Un libro sobrecogedor, potente e inspirador que busca ayudar a todos aquellos cuyos traumas les impiden vivir en plenitud",
    precio: 1250,
    imagen: "images/nov-4.png",
  },
];

//----Creacion de data de productos, carrito, contador-------

let productos = librosRec;
let carrito = [];
let contador = 0;
let shoppingCartRec = document.getElementById("shoppingCart");
document.getElementById("contador").innerHTML = contador;

localStorage.setItem("productos", JSON.stringify(productos));
let db = JSON.parse(localStorage.getItem("productos"));
//--------------------------------------------------------------
//Crear las cards
let tarjetas = document.getElementById("tarjetasRec");

db.map(function (prod, i) {
  let card = `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mt-4 d-flex ">
  <div class="card mr-0 ml-0">
    <div class="text-center zoom">
      <img src="${prod.imagen}" class="img-fluid rounded img-thumbnail imagenalto" height="130px" width="150px" alt="">
      </img>
    </div>
    <div class="card-body flex-fill">
      <div class="container text-center">
        <h5>${prod.nombre}</h5>
        <span class="badge badge-pill badge-primary">${prod.autor}</span>
      </div>
      <div class="text-center mb-1">
        <p style="text-align:left"> ${prod.descripcion} </p>
      </div>
      <span class="h2 text-center">$${prod.precio}</span>

      <div class="row">
        <div class="col px-0 ml-0 trans text-center">
          <button type="submit"  class="btn btn btn-outline-danger">Comprar</button> 
          <button type="submit" class="btn btn-outline-success" onclick='addCarrito(${i})'>Añadir a carrito</button>  
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
  tarjetas.innerHTML += card;
});


let productosNov = librosNov;
let carritonov = [];

let shoppingCartNov = document.getElementById("shoppingCart");
document.getElementById("contador").innerHTML = contador;

localStorage.setItem("productosNov", JSON.stringify(productosNov));
let dbnov = JSON.parse(localStorage.getItem("productosNov"));
//--------------------------------------------------------------
//Crear las cards
let tarjetasnov = document.getElementById("tarjetasNov");

dbnov.map(function (prod, i) {
  let card = `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mt-4 d-flex ">
  <div class="card mr-0 ml-0">
    <div class="text-center zoom">
      <img src="${prod.imagen}" class="img-fluid rounded img-thumbnail imagenalto" height="130px" width="150px" alt="">
      </img>
    </div>
    <div class="card-body flex-fill">
      <div class="container text-center">
        <h5>${prod.nombre}</h5>
        <span class="badge badge-pill badge-primary">${prod.autor}</span>
      </div>
      <div class="text-center mb-1">
        <p style="text-align:left"> ${prod.descripcion} </p>
      </div>
      <span class="h2 text-center">$${prod.precio}</span>

      <div class="row">
        <div class="col px-0 ml-0 trans text-center">
          <button type="submit"  class="btn btn btn-outline-danger">Comprar</button> 
          <button type="submit" class="btn btn-outline-success" onclick='addCarrito(${i})'>Añadir a carrito</button>  
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
  tarjetasnov.innerHTML += card;
});

function addCarrito(index) {
  let producto = db[index];

  //   console.log(producto);
  let storage = JSON.parse(localStorage.getItem("carrito")) || []; //si no existe la clave me devuelva un arreglo vacio
  storage.push(producto);
  localStorage.setItem("carrito", JSON.stringify(storage));
  contador = storage.length;
  document.getElementById("contador").innerHTML = contador;
}

// let lista = document.getElementById("lista-carrito");
// for(let i=0; contador.length;i++){
// let prueba =
// `
// <td>
// <img src="${this.imagen[i]}" width=100>
// </td>
// <td>${nombre[i]}</td>
// <td>
// <input type="number" class="form-control cantidad" min="1" value=${prod.cantidad}>
// </td>
// <td id='subtotales'>${prod.precio * prod.cantidad}</td>
// <td>
// <a href="#" class="borrar-producto fas fa-times-circle" data-id="${prod.id}"></a>
// </td>
// `;
// lista.innerHTML +=prueba;
// };
