const mdLinks = require('../index.js');
const getLinks = require('../lib/getLinks.js');
// const  = require('../index.js');
const getFilesMd= require('../lib/getLinks.js');
const readFilesMd = require('../lib/readFilesMd.js');
const validateLinks = require('../lib/validateLinks.js');
const statsLinks = require('../lib/statsLinks.js');



const path = require('path');


  /**---Función Principal  mdLinks--- */
describe('mdLinks', () => {
  it.only('Should be a function', () => {
    expect(typeof mdLinks).toBe('function')
  });
 

  it('Should return absolute path', () => {
    expect(validateRoute('./mdFiles')).toBe('C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles')
  });

  it('Should resolve a promise with links array ', (done) =>{
    const pathValid = './mdFiles';
    console.log(pathValid);
    const arrLinks = [
      {
        href: 'https://github.com/markdown-it/markdown-it',
        text: 'markdown-it',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://nodejs.org/es/about/',
        text: 'Acerca de Node.js - Documentación oficial',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://docs.npmjs.com/creating-node-js-modules',
        text: 'https://docs.npmjs.com/creating-node-js-modules',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://algoError.deprueba.com/',
        text: 'https://algoError.deprueba.com/',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      }
    ];
    // mdLinks(pathValid).then((r)=>{
    // expect(r).toEqual(arrLinks);
    // done();
    // });
    expect(mdLinks(pathValid)).resolves.toEqual(arrLinks);
    done();
    // 
  });

  it.skip('Should return a error message', () => {
    const route1 = './mdFiles/texto.txt';
    const errCode = 'ENOTDIR';
    return mdLinks(route1).catch(err => {
      expect(err.code).toBe(errCode)
    });
  });
  
  it.skip('Should throw an error ', () => {
      const route2 = './mdFiles/texto.txt';
      expect(mdLinks(route2)).toThrow();
    });   // return expect(mdLinks(route)).rejects.toBe(errCode)

      
  it.skip('Should throw an error ', () => {
    const pathAbsolute1 = path.resolve('./texto.txt');
    return expect(mdLinks(pathAbsolute1)).rejects.toBe(errCode)
  });

 
});


/**---Función Principal getLinks para obtener los links */
describe('getLinks', () => {
  it('Should be a function', () => {
    expect(typeof getLinks).toBe('function')
  });

  it('Should return a links array', () => {    
    const pathAbs = path.resolve('./mdFiles');
    const arrayLink = [
      {
        href: 'https://github.com/markdown-it/markdown-it',
        text: 'markdown-it',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://nodejs.org/es/about/',
        text: 'Acerca de Node.js - Documentación oficial',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://docs.npmjs.com/creating-node-js-modules',
        text: 'https://docs.npmjs.com/creating-node-js-modules',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://algoError.deprueba.com/',
        text: 'https://algoError.deprueba.com/',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      }
    ];
    getLinks(pathAbs).then((data)=>{
      expect(data).toStrictEqual(arrayLink);
    });
  });

});

/**---Función getFilesMd para obtener los archivos MD */
describe('getFilesMd', () => {
  it('Should be a function', () => {
    expect(typeof getFilesMd).toBe('function')
  });
  it('Should return array whit 2 elements', () => {
    getFilesMd('./mdFiles').then((files)=>{
      expect(files.length).toBe(2);
    })
  });
  it('Should return array with 2 files includes its path', () => {
    const pathResolved = path.resolve('./mdFiles');
    const filesMd = [
      'C:\Users\marce\Proyectos\mdlinks\bog001-md-links\mdFiles\dirPrueba\fileMdOtro.md',
      'C:\Users\marce\Proyectos\mdlinks\bog001-md-links\mdFiles\onlyText.md',
      'C:\Users\marce\Proyectos\mdlinks\bog001-md-links\mdFiles\prueba.md'
    ];
    getFilesMd(pathResolved).then((files)=>{
      expect(files).toStrictEqual(filesMd);
    })
  });

  it('Should resolve with md files array ', () => {
    const pathResolved3 = './mdFiles';
    const files = [
      'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles\\onlyText.md',
      'C:\\Users\\marce\\Proyectos\\mdlinks\\bog001-md-links\\mdFiles\\prueba.md'
      ];
    return expect(getFilesMd(pathResolved3)).resolves.toEqual(files);
  });
  
});

/**---readFiles Function--- */
describe('readFilesMd', () => {
  it('Should be a function', () => {
    expect(typeof readFilesMd).toBe('function')
  });
  it.skip('Should return links array', () => {
    const arrayLinks = [
      {
        href: 'https://github.com/markdown-it/markdown-it',
        text: 'markdown-it',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://nodejs.org/es/about/',
        text: 'Acerca de Node.js - Documentación oficial',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',   
        text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',   
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://docs.npmjs.com/creating-node-js-modules',
        text: 'https://docs.npmjs.com/creating-node-js-modules',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://algoError.deprueba.com/',
        text: 'https://algoError.deprueba.com/',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      ];
    const filesMd2 = [
      'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles\\onlyText.md',
      'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles\\prueba.md'
      ];
    return expect(readFilesMd(filesMd2)).toStrictEqual(arrayLinks);
    });
});


// *---ValidateLinks Function---*/
describe('validateLinks', ()=>{
  it('Should be a function', () => {
    expect(typeof readFilesMd).toBe('function')
  });

  it('Should return a validated links array ', () => {
    const arrayLinks2 = [
      {   
      href: 'https://github.com/markdown-it/markdown-it',
      text: 'markdown-it',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      text: 'expresiones regulares (<code>RegExp</code>)',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
       }
    ];
    const valLinks = [{
      href: 'https://github.com/markdown-it/markdown-it',
      text: 'markdown-it',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
      statusCode: 200,
      status: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      text: 'expresiones regulares (<code>RegExp</code>)',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
      statusCode: 200,
      status: 'OK'
    }
    ];
    validateLinks(arrayLinks2).then((res) =>{
      expect(res).toStrictEqual(valLinks);
    });
    
  });

  it('prueba contiene link valido ', () =>{
    const linkInicial = [{
      href: 'https://nodejs.org/es/about/',
      text: 'Acerca de Node.js - Documentación oficial',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
    },
    {
      href: 'https://github.com/markdown-it/markdown-it',
      text: 'markdown-it',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
    }
  ];
    const link2 = {
      href: 'https://nodejs.org/es/about/',
      text: 'Acerca de Node.js - Documentación oficial',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
      statusCode: 200,
      status: 'OK'
    };
    validateLinks(linkInicial).then((resp) => {
      expect(resp).toContainEqual(link2);
    });
  });

  

  it('Should return broken link ', () => {
    const linkPrueba = [ {
      href: 'https://algoError.deprueba.com/',
      text: 'https://algoError.deprueba.com/',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
    }];

    const linkPrubValid = [{
      href: 'https://algoError.deprueba.com/',
      text: 'https://algoError.deprueba.com/',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
      statusCode: 'ETIMEDOUT',
      status: 'FAIL'
    }
  ];
    return validateLinks(linkPrueba).then((r)=>{
      expect(r).toEqual(linkPrubValid );
    })
  } );

});

/**--Describe statsLinks Function--- */

describe('statsLinks',() => {
  it.skip('Should return stats links', ()=>{
    const routeUser = './mdFiles';
    const arrayMockStats= [ 7, 6];
    return mdLinks(routeUser).then((links)=>{
      const arrLinks = statsLinks(links);
      expect(arrLinks).toEqual(arrayMockStats);
    });
  });

  it('Should return array whit stats Total and Unique', ()=>{
    const p = [
      {
        href: 'https://github.com/markdown-it/markdown-it',
        text: 'markdown-it',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
        text: 'expresiones regulares (<code>RegExp</code>)',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://nodejs.org/es/about/',
        text: 'Acerca de Node.js - Documentación oficial',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://docs.npmjs.com/creating-node-js-modules',
        text: 'https://docs.npmjs.com/creating-node-js-modules',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      },
      {
        href: 'https://algoError.deprueba.com/',
        text: 'https://algoError.deprueba.com/',
        pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles'
      }
    ];
    const statsPrub = [ 7, 6, 0];
    return expect(statsLinks(p)).toEqual(statsPrub);
  });

  it('Should contain a broken link', ()=>{
    const linkBroken = [{
      href: 'https://algoError.deprueba.com/',
      text: 'https://algoError.deprueba.com/',
      pathFile: 'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles',
      statusCode: 'ETIMEDOUT',
      status: 'FAIL'
    }];
    const arrayBroken = [1, 1, 1];
    return expect(statsLinks(linkBroken)).toEqual(arrayBroken);
  });


 
});