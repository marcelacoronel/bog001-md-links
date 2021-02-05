/**---Función para obtener estadísticas de los links encontrados---*/

const statsLinks = (arrayLinks) => {
    // console.log("stats de links");
    const arrayUrl = [];
    let brokenLinks = 0;
    const totalLinks =arrayLinks.length;
    
    arrayLinks.forEach(element => {
        arrayUrl.push(element.href)
        if(element.status == 'FAIL') {           
            brokenLinks += 1; 
        }
    });   

    const arrayUniqueLinks = new Set(arrayUrl);
    const totalUniqueLinks = arrayUniqueLinks.size;

    const stats = [totalLinks, totalUniqueLinks, brokenLinks]
    // console.log(stats)

    return stats;
    
    // console.log(arrayUrl);
    // console.log(arrayUniqueLinks);
    // console.log(`total links ${totalLinks}`);
    // console.log(`Total unique links ${totalUniqueLinks}`);
    // console.log(`broken links ${brokenLinks}`);
    

} 

module.exports = statsLinks;