let config = require('./pizzaConfig.js');

let endpointModel = {
    l: 0,
    k: 0,
    aC: [], // de taille k
    aL: []  // de taille k
}

module.exports.dataObject = {
    v: 0,
    e: 0,
    r: 0,
    c: 0,
    x: 0,
    s: [],
    aE: [],
    aRv: [],
    aRe: [],
    aRn: []
};

module.exports.createEndpointObject = function(){
    return config.utils.clone(endpointModel);
}

