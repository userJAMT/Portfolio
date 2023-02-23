import pro1 from "../assets/TechShop.jpg";
import pro2 from "../assets/MyPokeApp.jpg";

const projectCardData = [
  {
    imgsrc: pro1,
    title: "Ecommerce Tech Shop",
    text: "Colaboración en equipo bajo la metodología SCRUM para el desarrollo de un e-commerce con diseño responsive, donde se muestra un catálogo con distintos productos. Posee un carro de compras, autenticación por email y Google, pago con tarjeta de crédito, mailing y dashboard de admin para gestionar usuarios, ventas y productos",
    view: "https://tech-e-commerce.vercel.app/",
    source: "https://github.com/ricgomez99/Tech-e.commerce",
  },
  {
    imgsrc: pro2,
    title: "MyPokeApp",
    text: "MyPokeApp es un proyecto individual realizado en el bootcamp de SoyHenry, consiste en una SPA (Single Page Application) en el que se utilizó la api externa PokeApi (https://pokeapi.co/). En dicha página somos capaces de buscar, ordenar y filtrar distintos items proporcionados por la API ya mencionada, como tambien acceder a su detalle. Además es posible de crear nuevos items a través de un formulario y agregarlos a la base de datos de la App.",
    view: "https://my-poke-app-plum.vercel.app/",
    source: "https://github.com/userJAMT/MyPokeApp",
  },
];

export default projectCardData;
