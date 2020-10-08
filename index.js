const getLinks = require('./lib/getLinks.js');

const { resolve } = require('path');
const path = require('path');
const fs = require('fs');
//*----DATOS DE ENTRADA DE PRUEBA
let pathUser = './mdFiles';
// let pathUser = "./mdFiles/onlyText.md";
// let pathUser = "./mdFiles/prueba.md";
// let pathUser = "./mdFiles/texto.txt";
// let pathUser = "";
// pathReceived = "";
// pathReceived = "../../pruebaArchivos/docMD.md";
//*----FIN DATOS ENTRADA

// *---Validar si ruta existe y es absoluta----
const validateRoute = ((pathUser) => {
  if (fs.existsSync(pathUser)) {
    if (!path.isAbsolute(pathUser)) {
      const pathResolved = resolve(pathUser);
      return pathResolved;
    }
  } 
});


//*--Función principal MDLINKS--------------
const mdLinks = (pathUser) => {
  return new Promise((resolve, reject) => {
    const validPath = validateRoute(pathUser);
    getLinks(validPath).then((links)=>{
    console.log(links);
    resolve(links);
    })
    .catch((err)=>{
      console.log(err);
      reject(err)
    });
  });
}

mdLinks(pathUser);



//*--EJEMPLO PASAR DATOS DESDE LA CONSOLA
//readFileUser(path.resolve(process.argv[2]))
//.then(console.log(readFileUser))
//* ---------------

module.exports = mdLinks;
module.exports = validateRoute;