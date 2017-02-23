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
            ++i;
        }
    }

    cashResult.push(cacheVideo);

}

console.log(cacheResult.length);
for(var i =0;i<cacheResult.length;++i){
    console.log(i);
    console.log(cacheResult[i]);
}