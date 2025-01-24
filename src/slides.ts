import {Slide} from "./interfaces";

/* data about projects */
const slides : Slide[] = [
    {
        id:0,
        title:'Expense Tracker',
        image:require('https://res.cloudinary.com/dqzvbdf9r/image/upload/v1737761379/portfolio/Screenshot_2025-01-24_182754_rimjc9.png'),
        stack:[
            "html",
            "react",
            "javascript",
            "node.js",
            "tailwind css",
            "mongodb",
            "express.js",
            "jwt"
        ],
        description_en:`Expense tracker that 
        allows to create, update, delete, list and filter your expenses 
        to keep record of your expenses`,
        description_es:`Aplicativo de control de gastos
        que permite registrar, actualizar, borrar, listar y filtrar tus gastos,
        para hacer seguimiento de tus gastos
    `,
        link:'https://expense-tracker-frontend-taupe.vercel.app',
        backend:'https://github.com/07krW5Hnr5ghy/expense-tracker-api',
        frontend:'https://github.com/07krW5Hnr5ghy/expense-tracker-frontend',
    },
    {
        id:1,
        title:'Reddit Client',
        image:require('https://res.cloudinary.com/dqzvbdf9r/image/upload/v1737759663/portfolio/project04_zblksv.png'),
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
        title:'Age calculator',
        image:require('https://res.cloudinary.com/dqzvbdf9r/image/upload/v1737759387/portfolio/project03_qhgrwo.png'),
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
    id:3,
    title:'E-Commerce Express Clothes',
    image:require('https://res.cloudinary.com/dqzvbdf9r/image/upload/v1737757990/portfolio/project02_i4moc2.png'),
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