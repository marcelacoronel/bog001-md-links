const getLinks = require('./lib/getLinks.js');
const validateLinks = require('./lib/validateLinks');


const { resolve } = require('path');
const path = require('path');
const fs = require('fs');

//*----DATOS DE ENTRADA DE PRUEBA ---*/
// let pathUser = './mdFiles';
// let options = { validate: true };
// let options = { validate: false };
//*----FIN DATOS ENTRADA ---*/

// *---Validar si ruta existe y es absoluta----
const validateRoute = ((pathUser) => {
  if (fs.existsSync(pathUser)) {
    if (!path.isAbsolute(pathUser)) {
      const pathResolved = resolve(pathUser);
      return pathResolved;
    }
  } 
});

//**--Función principal MDLINKS----- */
const mdLinks = (pathUser,options={})=> {
  return new Promise((resolve, reject) => {
    const validPath = validateRoute(pathUser);
    getLinks(validPath)
    .then((links)=>{
      if (options.validate) {
        resolve(validateLinks(links));
      }
      // else {
        // console.log("respueta de getlinks");
        // console.log(links);
        resolve(links);
      // }
     
    
    })
    .catch((err)=>{
      console.log(err.message);
      reject(err)
    });
    
  });
}


//**---Prueba de mdlinks---- */
// mdLinks(pathUser,options);


module.exports = mdLinks;
module.exports = validateRoute;