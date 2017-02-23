var data = require('./pizzaParser.js').data;

//tri par nombre de requete décroissant
data.aR = data.aR.sort((a,b) => a.n < b.n);

var cacheResult = [];

for(var l=0;l<data.c;++l) {
    var sumResult = 0;
    var i = 0;
    var cacheVideo = [];
    
    while(sumResult < data.x && i < data.r) {
        if(sumResult + data.s[data.aR[i].v]<= data.x && cacheVideo.indexOf(data.aR[i].v) === -1) {
            // taille totale des vidéos
            sumResult += data.s[data.aR[i].v];
            // numéro du cache server
            cacheVideo.push(data.aR[i].v);
            
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
fs.writeFile("./out/videos_worth_spreading.out", output, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 