const fetch = require('node-fetch');

// Función para validar los links encontrados OK /FAIL
const validateLinks = (arrayLinks) => {
    const validLinks = arrayLinks.map((link)=>{
        return fetch(link.href).then((resp) =>{
            link.statusCode = resp.status;
            link.status = resp.statusText;
            return link;
        })
        .catch((err)=>{
            link.statusCode = err.code;
            link.status = 'FAIL';
            return link;
        })               
    });     
  
    return Promise.all(validLinks)
}

module.exports = validateLinks;

