#!/usr/bin/env node
// *--the firts line is importan for the correct operation to the app, don't delete it ---*//

const { bgMagenta } = require('chalk');
const chalk = require('chalk');
const mdLinks = require('../index.js');
const getLinks = require('../lib/getLinks.js');
const statsLinks = require('../lib/statsLinks');
const validateLinks = require('../lib/validateLinks.js');

const argv = require('minimist')(process.argv.slice(2));
const pathUser = argv._[0];

console.log(chalk.bold.cyan(" ------Welcome to MD-LINKS!!! ------\n"));
console.log(chalk.bold.cyan(" ------By Marcela Coronel 2020 -----\n"));
console.log(chalk.bold.cyan(" \n"));

/**Obtener solo links */
if (!argv.validate && !argv.stats) {
    console.log(chalk.bold.cyan(" ----------------------------------\n"));
    console.log(chalk.bold.cyan(" ------Getting links, wait !! -----\n"));
    console.log(chalk.bold.cyan(" ----------------------------------\n"));
    mdLinks(pathUser, { validate: false })
    .then((links)=>{
        links.forEach((infoLink, i)=>{
            console.log(`
            ------ ${chalk.yellowBright.bold('Link '+(i+1))}------\n
            - Link: ${chalk.blue.bold(infoLink.href)}\n
            - Text: ${chalk.blue.bold(infoLink.text.slice(0, 49))}\n
            - Path: ${chalk.blue.bold(infoLink.pathFile)}\n
            ----------------------------------\n
          `);            
        });
})
.catch((e) => {
    console.log(`Error:${chalk.yellowBright(e)}`);
});
}

/**---Mostrar stats y validate--- */
if (argv.validate && argv.stats) {
    console.log(chalk.bold.cyan(" ---------------------------------------\n"));
    console.log(chalk.bold.cyan(" --- Validate and stats links, wait!!---\n"));
    console.log(chalk.bold.cyan(" ---------------------------------------\n"));
    mdLinks(pathUser, { validate: true })
        .then((validLinks)=>{
            const arrayStats = statsLinks(validLinks);
            console.log( chalk.yellowBright(`Total Links: ${arrayStats[0]}`) );
            console.log( chalk.underline.green(`Unique: ${arrayStats[1]}`) );
            console.log( chalk.red(`Broken: ${arrayStats[2]}\n`) );
        })
        .catch((e) => {
            console.log(`Error:${chalk.yellowBright(e)}`);
        });
}

/**---Mostrar solo validate ---*/
if (argv.validate && !argv.stats) {
    console.log(chalk.bold.cyan(" ----------------------------------\n"));
    console.log(chalk.bold.cyan(" -----Validating links, wait!!-----\n"));
    console.log(chalk.bold.cyan(" ----------------------------------\n"));
    mdLinks(pathUser,{ validate: true })
        .then((validLinks)=>{
            validLinks.forEach((infoLink, i)=>{
                console.log(`------${chalk.yellowBright.bold('Link '+(i+1))}------`)
                console.log(chalk.blue(`href: ${infoLink.href}`));
                console.log(chalk.cyan(`Text: ${infoLink.text.slice(0, 49)}`));
                console.log(chalk.cyan(`path: ${infoLink.pathFile}`));
                if(infoLink.statusCode == 200 && infoLink.status == 'OK'){
                    console.log(chalk.green(`statusCode: ${infoLink.statusCode}`));
                    console.log(chalk.green(`status: ${infoLink.status}\n`));
                }
                else{
                    console.log(chalk.red(`statusCode: ${infoLink.statusCode}`));
                    console.log(chalk.red(`status: ${infoLink.status}\n`));
                }    
            })
        })
        .catch((e) => {
            console.log(`Error:${chalk.yellowBright(e)}`);
        });
}

/**---Mostrar solo stats--- */
if (!argv.validate && argv.stats) {
    mdLinks(pathUser, { validate: false })
    .then((links)=>{
        const arrStats = statsLinks(links);
        console.log(chalk.bold.cyan(" -----------------------\n"));
        console.log(chalk.bold.cyan(" ----- Stats links -----\n"));
        console.log(chalk.bold.cyan(" -----------------------\n"));
        console.log( chalk.yellowBright(`Total Links: ${arrStats[0]}`) );
        console.log( chalk.underline.blue(`Unique Links: ${arrStats[1]}\n`) );
    })
    .catch((e) => {
        console.log(`Error:${chalk.yellowBright(e)}`);
    });
}



