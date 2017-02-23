// 5 videos, 2 endpoints, 4 request descriptions, 3 caches 100MB each.
// Videos 0, 1, 2, 3, 4 have sizes 50MB, 50MB, 80MB, 30MB, 110MB.
// Endpoint 0 has 1000ms datacenter latency and is connected to 3 caches:
// The latency (of endpoint 0) to cache 0 is 100ms.
// The latency (of endpoint 0) to cache 2 is 200ms.
// The latency (of endpoint 0) to cache 1 is 200ms.
// Endpoint 1 has 500ms datacenter latency and is not connected to a cache.
// 1500 requests for video 3 coming from endpoint 0.
// 1000 requests for video 0 coming from endpoint 1.
// 500 requests for video 4 coming from endpoint 0.
// 1000 requests for video 1 coming from endpoint 0.
var fs = require('fs');
var readline = require('readline');
var data = '';

dataObject = require('./pizzaModules/pizzaDataObject.js');
var filename = 'me_at_the_zoo.in';

var lineReader = readline.createInterface({
    input: fs.createReadStream('in/'+filename)
});

var compteur_lignes=0;
lineReader.on('line', function (line) {
    if (compteur_lignes == 0) {
        var line_table = line.split(' ');
        dataObject.v = line_table[0];
        dataObject.e = line_table[1];
        dataObject.r = line_table[2];
        dataObject.c = line_table[3];
        dataObject.x = line_table[4];
        compteur_lignes++;
    } else if (compteur_lignes = 2) {
        var line_table = line.split(' ');
        s = line_table;
    }
    data += line;
    console.log('Ligne trouvée : ' + line);
    //console.log('Line from file:', line);
});

lineReader.on('close', function () {
    console.log('Fin de fichier');
});

lineReader.on('error', function (err) {
    console.log(err.stack);
});