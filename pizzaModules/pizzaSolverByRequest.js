var dataObjects = require('./pizzaParser.js').dataObjects;

dataObjects.forEach(function(data){

	var outputResult = [];
	for(let i=0;i<data.c;++i) {
		outputResult.push({ sum :0 , v:[]});
	}

	data.meanSize = data.s.reduce((acc, val) => acc+= (val/data.s.length));
	
	data.aR.forEach((r) => r.sv = data.s[r.v]);
	data.aR.sort((a,b) => b.n - a.n + a.sv -b.sv);

	// On trie les caches serveur par latence
	data.aE.forEach(function(e){
		e.aCL = e.aCL.sort((a,b) => a.l - b.l);
	});

	data.aR.forEach(function(r){
		let endpoint = data.aE[r.e];
		let cacheIndex = 0;
		let videoSize = data.s[r.v];
		let minLatence = endpoint.l;
		while(cacheIndex < endpoint.aCL.length && outputResult[endpoint.aCL[cacheIndex].c].v.indexOf(r.v) === -1){
			cacheIndex++;
		}
		if(cacheIndex < endpoint.aCL.length){
			minLatence = endpoint.aCL[cacheIndex].l;
		}
		cacheIndex =0;
		while(cacheIndex < endpoint.aCL.length && outputResult[endpoint.aCL[cacheIndex].c].sum + videoSize > data.x) {
			cacheIndex++;
		}
		if(cacheIndex < endpoint.aCL.length && outputResult[endpoint.aCL[cacheIndex].c].v.indexOf(r.v) === -1 && minLatence - endpoint.aCL[cacheIndex].l > 100) {
			outputResult[endpoint.aCL[cacheIndex].c].sum += videoSize;
			outputResult[endpoint.aCL[cacheIndex].c].v.push(r.v);
		}
	});

	var output = outputResult.filter((a) => a.v.length).length;
    output += '\n';
    outputResult.forEach(function(cache, index){
        if(cache.v.length) {
             output += index;
             cache.v.forEach(function(video){
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