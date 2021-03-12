const readFilesMd = require('./readFilesMd.js');
const { resolve } = require('path');
const path = require('path');
const fs = require('fs');

let arrayFiles = [];

const validateRoute = ((pathUser) => {
    if (fs.existsSync(pathUser)) {
      if (!path.isAbsolute(pathUser)) {
        const pathResolved = resolve(pathUser);
        return pathResolved;
      }
    }
  });
  

// Función getFiles para obtener los archivos md con recursión
const getFiles = (pathAbsolute) => {
    const fileType = fs.statSync(pathAbsolute);
    if (fileType.isFile()) {
        if (path.extname(pathAbsolute) == '.md') {
            arrayFiles.push(pathAbsolute);
            return arrayFiles;
        }
    }
    if (fileType.isDirectory()) {
        const readDirectory = fs.readdirSync(pathAbsolute);
        readDirectory.forEach((element) => {
            let file = path.join(pathAbsolute, element);
            return getFiles(file);
        });
    }
    return arrayFiles;
}

// Función getLinks 
const getLinks = (pathResolved) => {
    const links = new Promise((resolve) => {
        const validPath = validateRoute(pathResolved);
        const files = getFiles(validPath );
        const linksFound = readFilesMd(files)
        resolve(linksFound);
    });
    return links
};


module.exports = getLinks;