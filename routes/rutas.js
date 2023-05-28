const express = require("express"); //importar express
const router = express.Router();

const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const cuadrado = require("../calculos");
router.get('/calculos/:width', (req, res) => {
 const { width } = req.params;
 let a = cuadrado.area(width);
 let b = cuadrado.perimetro(width);
 console.log(width, a, b);
 res.send({
 ancho: width,
 area: a,
 perimetro: b
 });
});

router.get('/', (req,res) => {
res.sendFile(process.cwd()+"/public/index.html")
});


/*router.get('/', (req,res) => {
    res.send({message:"hola mundo soy Josué Emmanuel Uranga Calzada"});
   });
*/

   router.get('/ayuda', (req,res) => {
    res.send({message:"En que te ayudo soy Josué Emmanuel Uranga Calzada"});
   });

   router.get('/ayuda/:name', (req,res) => {
    res.send({message:`Hola ${req.params.name} en que te ayudo`});
   });

   router.get('/prueba', (req,res) => {
    res.send({message:`Hola ${req.query.name} ${req.query.apellido}`});
   });
/***********************************************/

/*API #1*/
router.get("/datos", (req, res) => {
  res.send({
    secretBase: "Super tower",
    active: true,
    members: [
      {
        name: "Josué Emmanuel Uranga Calzada",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes",
        ],
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel",
        ],
      },
    ],
  });
});

/*API #2*/
/* Checarlo en POSTMAN */
router.post("/ayuda", (req, res) => {
  console.log("Cuerpo de la peticion: ", req.body);
  res.send({
    message: "Hola mundo en que te puedo ayudar, SOY UNA PETICION POST",
  });
});

/*API #3*/

router.post("/producto", (req, res) => {
  console.log("Cuerpo de la peticion: ", req.body);

  //La sintaxis de desestructuración es una funcionalidad que vino
  // junto con ES6. Es una expresión de JavaScript que permite
  //desempacar valores de arreglos o propiedades de objetos en distintas variables;

  const { nombre, sueldo, categoria } = req.body;
  console.log(nombre);
  console.log(sueldo);
  console.log(categoria);

  res.send({ message: "El producto se ha recibido" });
});

/*API #4*/

// API que combina TODOS los parámetros
router.post("/producto/:id", (req, res) => {
  const { id } = req.params;
  const { motor } = req.query;
  const { precio } = req.body;
  console.log(id, motor, precio);
  res.json({
    stockmin: 10,
    stockmax: 15,
    existencia: 7,
  });
});

module.exports = router;