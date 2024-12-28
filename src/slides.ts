import {Slide} from "./interfaces";

/* data about projects */
const slides : Slide[] = [
    {
        id:0,
        title:'Age calculator',
        image:require('../src/assets/project03.png'),
        stack:[
            "html",
            "css",
            "javascript"
        ],
        link:'https://07krw5hnr5ghy.github.io/age-calculator/',
        description_en:`App that calculate the age of the user when the birthdate is 
        inserted in the input using a javascript calendar date selector.`,
        description_es:`App que calcula la edad del usuario al momento de insertar la
        fecha de nacimiento en el formulario usando un calendario para seleccionar la fecha.`,
        source:'https://github.com/07krW5Hnr5ghy/age-calculator',
    },
    {
        id:1,
        title:'Reddit Client',
        image:require('../src/assets/project04.png'),
        stack:[
            "html",
            "css",
            "javascript"
        ],
        link:'https://07krw5hnr5ghy.github.io/reddit-client/',
        description_en:`Reddit client that allow to visualize post titles feed of three sub reddits at the same time`,
        description_es:`Cliente de reddit que permite visualizar hasta 3 feeds de titulos de posts de diferentes sub reddits al mismo tiempo`,
        source:'https://github.com/07krW5Hnr5ghy/reddit-client',
    },
    {
    id:2,
    title:'Pokemon SPA',
    image:require('../src/assets/project01.png'),
    stack:[
        "html",
        "sass",
        "react",
        "javascript",
        "node.js",
        "typescript",
        "firebase",
        "postgres",
        "redux",
        "redux-persist"
    ],
    description_en:`Single Page Application that 
    contains a collection of pokemons where you 
    could see the stats of each one, create your own pokemons,
    modify and delete them`,
    description_es:`Single Page Application que contiene
    una colección de pokemons donde tu puedes ver la data de cada uno,
    crear tus propios pokemons modificarlos y borrarlos
`,
    link:'https://pi-pokemon-main-client-a1yl.vercel.app',
    source:'https://github.com/07krW5Hnr5ghy/PI-Pokemon-main',
},{
    id:3,
    title:'E-Commerce Express Clothes',
    image:require('../src/assets/project02.png'),
    stack:[
        "html",
        "css",
        "javascript",
        "react",
        "node.js",
        "postgres",
        "cloudinary",
        "passport.js",
        "node mailer"
    ],
    link:'https://express-test-liard.vercel.app',
    description_en:`Clothes Ecommerce where you can upload products to sell,
    keep record or your sales, and update your post of the clothes that you
    want to sell.`,
    description_es:`Ecommerce de ropa donde puedes subir productos para vender,
    llevar un registro de sus ventas, y actualizar tu publicacion de ropa que
    quieres vender.`,
    backend:'https://github.com/LucasMacchi/PF-Clothes-Backend',
    frontend:'https://github.com/Carsefer/PF-Clothes-Client',
},
];

export default slides;