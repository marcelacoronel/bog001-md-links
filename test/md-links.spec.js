const mdLinks = require('../index.js');
const getLinks = require('../lib/getLinks.js');
const validateRoute = require('../index.js');
const getFilesMd = require('../lib/getFilesMd.js');
const readFilesMd = require('../lib/readFilesMd.js');

const path = require('path');

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
  }
  ]

describe('mdLinks', () => {
  it('Should be a function', () => {
    expect(typeof mdLinks).toBe('function')
  });

  it('Should be return absolute path', () => {
    expect(validateRoute('./mdFiles')).toBe('C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles')
  });

  it.skip('Should be return a error message', () => {
    const route = './mdFiles/texto.txt';
    const errCode = 'ENOTDIR';
    return mdLinks(route).catch(err => {
      expect(err.code).toBe(errCode)
    });
  });
  
  it.skip('Should throw an error ', () => {
      const route = './mdFiles/texto.txt';
      expect(mdLinks(route)).toThrow();
    });

    // return expect(mdLinks(route)).rejects.toBe(errCode)
    

});



describe('getLinks', () => {
  it('Should be a function', () => {
    expect(typeof getLinks).toBe('function')
  });
  it.skip('Should be....', () => {
    expect(getLinks('./mdFiles')).toBe('object')
  });
});

describe('getFilesMd', () => {
  it('Should be a function', () => {
    expect(typeof getFilesMd).toBe('function')
  });
  it('Should be return array whit 2 elements', () => {
    getFilesMd('./mdFiles').then((files)=>{
      expect(files.length).toBe(2);
    })
  });
  it('Should be return array with 2 files includes its path', () => {
    const filesMd = [
    'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles\\onlyText.md',
    'C:\\Users\\Marcela\\proyecto4\\bog001-md-links\\mdFiles\\prueba.md'
    ];
    getFilesMd('./mdFiles').then((files)=>{
      expect(files).toBeEqual(filesMd);
    })
  });
  
});

describe('readFilesMd', () => {
  it('Should be a function', () => {
    expect(typeof readFilesMd).toBe('function')
  });
  it.skip('Should be return links array', () => {
    return readFilesMd('./mdFiles').then((links)=>{
      console.log(links);
      expect(links).toBeEqual(arrayLinks);
      })
  });

  
});

