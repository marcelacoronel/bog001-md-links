const getFilesMd = require('./getFilesMd.js');
const readFilesMd = require('./readFilesMd.js');

const path = require('path');
const fs = require('fs');
// const { resolve } = require('path');
// let pathResolved;

const getLinks = (pathResolved) => {
    const linksFound = getFilesMd(pathResolved)
    .then((files)=> (readFilesMd(files)))
    .then((LinksFiles)=>{
        return LinksFiles;
    })
    .catch((err)=>(err))
return linksFound; 
}


module.exports = getLinks;