let config = require('./pizzaConfig.js');

let endpointModel = {
    l: 0,
    k: 0,
    aC: [], // de taille k
    aL: []  // de taille k
}

let arObjectModel = {
    v:0,
    e:0,
    n:0
}

module.exports.dataObject = {
    v: 0,
    e: 0,
    r: 0,
    c: 0,
    x: 0,
    s: [],
    aE: [],
    aR:[]
};

module.exports.createEndpointObject = function(){
    return config.utils.clone(endpointModel);
};

module.exports.createARObject = function(){
    return config.utils.clone(arObjectModel);
}
