var data = require('./pizzaParser.js').data;

//tri par nombre de requete décroissant
data.aR = data.aR.sort((a,b) => a.n < b.n);

var cacheResult = [];

for(var l=0;l<data.c;++l) {
    var sumResult = 0;
    var i = 0;
    var cacheVideo = [];

    var requestFiltered = data.aR.filter((a) => data.aE[a.e].aC.indexOf(l) !== -1);
    
    while(sumResult < data.x && i < requestFiltered.length) {
        if(sumResult + data.s[requestFiltered[i].v]<= data.x && cacheVideo.indexOf(requestFiltered[i].v) === -1 
            && data.aE[requestFiltered[i].e].aC.indexOf(l) !== -1) {
            // taille totale des vidéos
            sumResult += data.s[requestFiltered[i].v];
            // numéro du cache server
            cacheVideo.push(requestFiltered[i].v);
            
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
fs.writeFile("./out/kittens.out", output, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 