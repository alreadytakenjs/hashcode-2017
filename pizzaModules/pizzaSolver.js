var data = require('./pizzaParser.js').data;

var cacheResult = [];

for(var l=0;l<data.c;++l) {
    var sumResult = 0;
    var i = 0;
    var cacheVideo = [];
    
    while(sumResult < data.x && i < data.v) {
        if(sumResult + data.s[i]<= data.x) {
            // taille totale des vidéos
            sumResult += data.s[i];
            // numéro du cache server
            cacheVideo.push(i);
            
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
fs.writeFile("/tmp/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 