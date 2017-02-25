let config = require('./pizzaConfig.js');

module.exports.createDataObject = function(){
    return {
        v: 0,
        e: 0,
        r: 0,
        c: 0,
        x: 0,
        s: [],
        aE: [],
        aR:[]
    };
}

module.exports.createEndpointObject = function(){
    return {
        l: 0,
        k: 0,
        aC: [], // de taille k
        aL: []  // de taille k
    };
};

module.exports.createARObject = function(){
    return {
        v:0,
        e:0,
        n:0
    };
}
