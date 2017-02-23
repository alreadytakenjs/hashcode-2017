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

dataObject = require('./pizzaDataObject.js');
var filename = 'me_at_the_zoo.in';

//lecture fichier
var lines = require('fs').readFileSync('in/' + filename, 'utf-8').split('\n').filter(Boolean);
var premiere_ligne = lines[0].split(' ');
dataObject.v = premiere_ligne[0];
dataObject.e = premiere_ligne[1];
dataObject.r = premiere_ligne[2];
dataObject.c = premiere_ligne[3];
dataObject.x = premiere_ligne[4];
//array of video sizes
dataObject.s = lines[0].split(' ');


var test = function() {
    console.log('nb videos : ' + dataObject.v);
    console.log('nb endpoints : ' + dataObject.e);
    console.log('nb requests : ' + dataObject.r);
    console.log('nb caches : ' + dataObject.c);
    console.log('cache size : ' + dataObject.x);

    console.log('video sizes : ' + dataObject.s);
};

test();