import {Slide} from "./interfaces";

const slides : Slide[] = [{
    id:0,
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
    description:`Single Page Aplication that 
    contains a collection of pokemon where you 
    could see the stats of each one, create your own pokemons
    and modify and delete them`,
    link:'https://pi-pokemon-main-client-a1yl.vercel.app',
    source:'https://github.com/07krW5Hnr5ghy/PI-Pokemon-main',
},{
    id:1,
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
    description:`Clothes Ecommerce where you can upload products to sell,
    keep record or your sales, and update your post of the clothes that you
    want to sell.`,
    backend:'https://github.com/LucasMacchi/PF-Clothes-Backend',
    frontend:'https://github.com/Carsefer/PF-Clothes-Client',
}];

export default slides;