const getFilesMd = require('./getFilesMd.js');
const readFilesMd = require('./readFilesMd.js');

const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
// const { resolve } = require('path');
// let pathResolved;

//**---Función inicial solo leer archivos de un directorio--- */
// const getLinks = (pathResolved) => {
//     const linksFound = getFilesMd(pathResolved)
//     .then((files)=> (readFilesMd(files)))
//     .then((LinksFiles)=>{
//         return LinksFiles;
//     })
//     .catch((err)=>(err))
// return linksFound; 
// }

let arrayFiles =[];

//**---Realizando función getFiles para obtener los archivos md con recursión---*/
const getFiles = (pathAbsolute) => {
    return fsPromises.stat(pathAbsolute).then((resp)=>{
        if(resp.isFile())
        {
            if(path.extname(pathAbsolute) == '.md'){
                arrayFiles.push(pathAbsolute);
                return arrayFiles;
            }
        }
        if(resp.isDirectory()){
            console.log("es un directorio");
            return fs.promises.readdir(pathAbsolute).then((files)=>{
                files.forEach((element)=>{
                    let file = path.join(pathAbsolute,element);
                    return getFiles(file)
                    // .then((rta)=> {
                    //     console.log(`en isDirectory ${rta}`)
                    //     // arrayFiles= arrayFiles.concat(rta);
                    //     console.log(arrayFiles);
                    //     // return rta;
                    // });
                   
                });
               
            });
            
        }
        // else{
        //     console.log("es otro");
        // }
        // return arrayFiles;
    });
}
//**---Función getLinks ---*/
const getLinks = (pathResolved) => {
    const files = getFiles(pathResolved);
return files;
}




module.exports = getLinks;