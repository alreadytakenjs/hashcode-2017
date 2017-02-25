var dataObjects = require('./pizzaParser.js').dataObjects;

dataObjects.forEach(function(data){
    //tri par nombre de requete décroissant
    data.aR = data.aR.sort((a,b) => b.n - a.n);

    var cacheResult = [];

    for(var l=0;l<data.c;++l) {
        var sumResult = 0;
        var i = 0;
        var cacheVideo = [];

        var requestFiltered = data.aR.filter((r) => data.aE[r.e].aC.indexOf(l) !== -1);

        while(sumResult < data.x && i < requestFiltered.length) {
            // Index du serveur de cache
            var currentRequest = requestFiltered[i];
            var cIndex = data.aE[currentRequest.e].aC.indexOf(l);
            if(cIndex !== -1 && sumResult + data.s[currentRequest.v]<= data.x && cacheVideo.indexOf(currentRequest.v) === -1 &&
                data.aE[currentRequest.e].l - data.aE[currentRequest.e].aL[cIndex] > 0) {
                // taille totale des vidéos
                sumResult += data.s[currentRequest.v];
                // numéro du cache server
                cacheVideo.push(currentRequest.v);  
                data.aR.splice(data.aR.indexOf(currentRequest),1);         
            }
            ++i;
        }

        cacheResult.push(cacheVideo);

    }

    var output = cacheResult.filter((a) => a.length).length;
    output += '\n';
    cacheResult.forEach(function(cache, index){
        if(cache.length) {
             output += index;
             cache.forEach(function(video){
                output += ' ' + video;
             });
             output += '\n';
        }

    });

    console.log(output);

    var fs = require('fs');
    fs.writeFile("./out/" + data.filename + '.out', output, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 

});
