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
var data = '';

pizzaDataObject = require('./pizzaDataObject.js');
dataObject = pizzaDataObject.dataObject;
var filename = 'me_at_the_zoo.in';

//lecture fichier
var lines = require('fs').readFileSync('in/' + filename, 'utf-8').split('\n');//.filter(Boolean);
var premiere_ligne = lines[0].split(' ');
//first line
dataObject.v = parseInt(premiere_ligne[0]);
dataObject.e = parseInt(premiere_ligne[1]);
dataObject.r = parseInt(premiere_ligne[2]);
dataObject.c = parseInt(premiere_ligne[3]);
dataObject.x = parseInt(premiere_ligne[4]);
//second line : array of video sizes
dataObject.s = lines[1].split(' ').map((a) => parseInt(a));
//third line and after : endpoints
var compteur_ligne = 2;
for (var i = 0; i < dataObject.e; i++) {
    //l and k
    var ligne_a = lines[compteur_ligne].split(' ');
    var endpoint = pizzaDataObject.createEndpointObject();
    endpoint.l = parseInt(ligne_a[0]);
    endpoint.k = parseInt(ligne_a[1]);
    dataObject.aE.push(endpoint);

    compteur_ligne++;
    for (var j = 0; j < endpoint.k; j++) {
        //c and ac
        console.log(lines[compteur_ligne])
        ligne_a = lines[compteur_ligne].split(' ');
        //cache
        endpoint.aC.push(parseInt(ligne_a[0]));
        //latence pour ce cache
        endpoint.aL.push(parseInt(ligne_a[1]));

        compteur_ligne++;
    }
}
//requetes
for (var k=0; k < dataObject.r; k++) {
    ligne_a = lines[compteur_ligne].split(' ');

    var requete = pizzaDataObject.createARObject();
    //ID of requested video
    requete.v = parseInt(ligne_a[0]);
    //ID of endpoint
    requete.e = parseInt(ligne_a[1]);
    //Number of requests
    requete.n = parseInt(ligne_a[2]);

    dataObject.aR.push(requete);

    compteur_ligne++;
}

var test = function() {
    console.log(dataObject);
    
};

test();